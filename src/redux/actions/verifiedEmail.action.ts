import { VerifidEmailInfo, stringValue } from "../../@types";
import { Api } from "../../api";
import { verifiedEmailConstants } from "../constants/verifiedEmail.constants";

export const verifiedEmailActions = {
  startVerifiedEmail: () => ({
    type: verifiedEmailConstants.START_VEIFIED_EMAIL,
  }),
  successVerifiedEmail: (nameOfProccess:stringValue) => ({
    type: verifiedEmailConstants.SUCCESS_VEIFIED_EMAIL,
    payload:nameOfProccess
  }),
  failVerifiedEmail: (error: stringValue) => ({
    type: verifiedEmailConstants.FAIL_VEIFIED_EMAIL,
    payload: error,
  }),
};

export const verifiedEmailActionsExcution = async (
  dispatch: any,
  VerifiedEmailInfo: VerifidEmailInfo,
  nameOfRequest: stringValue,
  asynFunction?: any,
) => {
  dispatch(verifiedEmailActions.startVerifiedEmail());
  asynFunction&&asynFunction(true);
  try {
    //to exucte request

      nameOfRequest === "emailVerificationWithOtp"
        ? await Api.post("/email-verification", VerifiedEmailInfo)
        : nameOfRequest === "resetPassword"
        ? await Api.post("/reset-password", VerifiedEmailInfo)
        : await Api.post("/send-email-verification-code", VerifiedEmailInfo);
        asynFunction&& asynFunction(false);
    dispatch(verifiedEmailActions.successVerifiedEmail(nameOfRequest));
  
    if (nameOfRequest!=='emailVerification') {
      window.location.href = "/auth/login";
    }
  } catch (error: any) {
    asynFunction&&  asynFunction(false);

    dispatch(
      verifiedEmailActions.failVerifiedEmail(
        error?.response?.data?.message || error.message
      )
    );
  }
};
