import { ChainId } from "@certusone/wormhole-sdk";
import {
  Container,
  Step,
  StepButton,
  Button,
  StepContent,
  Stepper,
  makeStyles,
  StepLabel
} from "@material-ui/core";

import { SetStateAction, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import useCheckIfWormholeWrapped from "../../hooks/useCheckIfWormholeWrapped";
import useFetchTargetAsset from "../../hooks/useFetchTargetAsset";
import {
  selectTransferActiveStep,
  selectTransferIsRedeemComplete,
  selectTransferIsRedeeming,
  selectTransferIsSendComplete,
  selectTransferIsSending,
} from "../../store/selectors";
import {
  setSourceChain,
  setStep,
  setTargetChain,
} from "../../store/transferSlice";
import { CHAINS_BY_ID } from "../../utils/consts";
import Redeem from "./Redeem";
import RedeemPreview from "./RedeemPreview";
import Send from "./Send";
import SendPreview from "./SendPreview";
import Source from "./Source";
import SourcePreview from "./SourcePreview";
import Target from "./Target";
import TargetPreview from "./TargetPreview";
import { swapwormholeRallyForCanonicalSolana, getWormholeRallyBalance } from "../../utils/wormholeSolanaSwap";


function Transfer() {
  useCheckIfWormholeWrapped();
  useFetchTargetAsset();
  const dispatch = useDispatch();
  const activeStep = useSelector(selectTransferActiveStep);
  const isSending = useSelector(selectTransferIsSending);
  const isSendComplete = useSelector(selectTransferIsSendComplete);
  const isRedeeming = useSelector(selectTransferIsRedeeming);
  const isRedeemComplete = useSelector(selectTransferIsRedeemComplete);
  const preventNavigation =
    (isSending || isSendComplete || isRedeeming) && !isRedeemComplete;

  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const pathSourceChain = query.get("sourceChain");
  const pathTargetChain = query.get("targetChain");

  const [seedPhrase, setSeedPhrase] = useState("");
  const [wormholeRallyAmt, setWormholeRallyAmt] = useState(0);
  const [wormholeRallyBalance, setWormholeRallyBalance] = useState(0);
  const [isSeedPhraseSubmitted, setIsSeedPhraseSubmitted] = useState(false);


  const handleStep5Submit = async () => {
    setIsSeedPhraseSubmitted(true);

    let currentWormholeRallyBalance = await getWormholeRallyBalance(seedPhrase);
    setWormholeRallyBalance(currentWormholeRallyBalance);
    dispatch(setStep(4));
  }

  const handleSeedPhraseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeedPhrase(e.target.value);
  }

  const handleWormholeRallyAmtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newAmt;
    try {
      newAmt = parseInt(e.target.value);
    } catch (e) {
      newAmt = 0;
    }
    setWormholeRallyAmt(newAmt);
  }

  const useStyles = makeStyles((theme) => ({
    button: {
      display: "flex",
      margin: `${theme.spacing(1)}px auto`,
      width: "100%",
      maxWidth: 400,
    },
    icon: {
      height: 24,
      width: 24,
    },
  }));

  const classes = useStyles();


  //This effect initializes the state based on the path params
  useEffect(() => {
    if (!pathSourceChain && !pathTargetChain) {
      return;
    }
    try {
      const sourceChain: ChainId =
        CHAINS_BY_ID[parseFloat(pathSourceChain || "") as ChainId]?.id;
      const targetChain: ChainId =
        CHAINS_BY_ID[parseFloat(pathTargetChain || "") as ChainId]?.id;

      if (sourceChain === targetChain) {
        return;
      }
      if (sourceChain) {
        dispatch(setSourceChain(sourceChain));
      }
      if (targetChain) {
        dispatch(setTargetChain(targetChain));
      }
    } catch (e) {
      console.error("Invalid path params specified.");
    }
  }, [pathSourceChain, pathTargetChain, dispatch]);

  useEffect(() => {
    if (preventNavigation) {
      window.onbeforeunload = () => true;
      return () => {
        window.onbeforeunload = null;
      };
    }
  }, [preventNavigation]);




  return (
    <Container maxWidth="md">
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step
          expanded={activeStep >= 0}
          disabled={preventNavigation || isRedeemComplete}
        >
          <StepButton onClick={() => dispatch(setStep(0))} icon={null}>
            1. Source
          </StepButton>
          <StepContent>
            {activeStep === 0 ? <Source /> : <SourcePreview />}
          </StepContent>
        </Step>
        <Step
          expanded={activeStep >= 1}
          disabled={preventNavigation || isRedeemComplete}
        >
          <StepButton
            disabled={preventNavigation || isRedeemComplete || activeStep === 0}
            onClick={() => dispatch(setStep(1))}
            icon={null}
          >
            2. Target
          </StepButton>
          <StepContent>
            {activeStep === 1 ? <Target /> : <TargetPreview />}
          </StepContent>
        </Step>
        <Step expanded={activeStep >= 2} disabled={isSendComplete}>
          <StepButton disabled icon={null}>
            3. Send tokens
          </StepButton>
          <StepContent>
            {activeStep === 2 ? <Send /> : <SendPreview />}
          </StepContent>
        </Step>
        <Step expanded={activeStep >= 3 && activeStep === 3} completed={isRedeemComplete}>
          <StepButton
            onClick={() => dispatch(setStep(3))}
            disabled={!isSendComplete || isRedeemComplete}
            icon={null}
          >
            4. Redeem tokens
          </StepButton>
          <StepContent>
            {(isRedeemComplete && activeStep === 3) ? <RedeemPreview /> : <Redeem />}
          </StepContent>
        </Step>


        <Step expanded={activeStep >= 0} completed={isSeedPhraseSubmitted}>
          <StepButton
            onClick={() => dispatch(setStep(4))}
            disabled={isSeedPhraseSubmitted}
            icon={null}
          >
            5. Enter Solana Wallet Seed Phrase
          </StepButton>
          {(!isSeedPhraseSubmitted) && 
            <StepContent>
              <input type="text" value={seedPhrase} onChange={handleSeedPhraseChange}/>
              <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={handleStep5Submit}
                  className={classes.button}
                >
                Next
              </Button>
            </StepContent>
          }
          
        </Step>

        <Step expanded={activeStep >= 4} completed={isRedeemComplete}>
          <StepButton
            onClick={() => dispatch(setStep(3))}
            disabled={!isSendComplete || isRedeemComplete}
            icon={null}
          >
            6. Swap Wormhole Rally Tokens for Canonical Token
          </StepButton>
          <StepContent>
            <p>You currently have {wormholeRallyBalance} Wormhole-Rally tokens</p>
            <span> Enter number of tokens to swap: </span>
            <input type="text" value={wormholeRallyAmt} onChange={handleWormholeRallyAmtChange}/>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => swapwormholeRallyForCanonicalSolana(seedPhrase, wormholeRallyAmt)}
              className={classes.button}
            >
              Swap {wormholeRallyAmt} Tokens
            </Button>
          </StepContent>
        </Step>
      </Stepper>
    </Container>
  );
}

export default Transfer;
