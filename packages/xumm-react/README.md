# XUMM Hooks

React package that aims to unplug XUMM logic from your React App. This is achieved using a XummProvider with some config and a set of easy to use hooks explained below.

## Usage

````tsx
// Providers.tsx
import { FC } from "react";
import { XummProvider } from "xumm-react";

const Providers: FC = ({children}) => (
    <XummProvider config={yourXummConfig}>
        {children}
    </XummProvider>
)
````

````tsx
// SignInPage.tsx
import { Button } from "@peersyst/react-components"
import { useSignIn } from "xumm-react";

const SignInPage = () => {
    const { signIn, signInData: { xummPayload } = {} } = useSignIn();
    const qr = xummPayload?.refs?.qr_png;
    
    return qr ? (
        <img src={qr} css={{ width: 200, height: 200 }} alt="xumm-qr" />
    ) : (
        <Button onClick={signIn} loading={isLoading}>
            {"Sign in"}
        </Button>
    );
}
````

### XummProvider

This provider nourishes hooks with the required config in order to work correctly. This config is the following:

- url: base XUMM url of your backend
- getToken: method to get the bearer token from your storage or state
- setToken: method to set the bearer token on your storage or state
- removeToken: method to remove the bearer token from your storage or state
- onError: general error handler
- paths: paths of your backend's XUMM endpoint
  - status: gets a XUMM transaction request status (defaults to "status", the uuid is added automatically to the path, so the final path would be "status/:uuid")
  - signIn: starts the sign in process (defaults to "auth/sign-in")
  - verifySignIn: verifies the sign in process (defaults to "auth/verify-sign-in")

### Common return values

Before hooks are explained it is important to know that all hooks return:
- A function to trigger the action 
- isLoading, isSuccess, isError flags
- The error if any

### Common options

There are also some common options:

- retry: indicates whether the action should be retried
- retryDelay: delay between retries
- onError: an error handler

### useTransactionRequestStatus

As the name indicates this hook is used to retrieve the status of a XUMM transaction.

These options can be passed:
- An onSigned option can be passed in order to perform an action when the transaction is signed.
- An onSuccess handler

This hook returns:
- A fetchStatus function that returns the status of a XUMM transaction with a given id
- A reactive status indicating the transaction's status or undefined

### useSignIn

Hook that initiates the sign in process with the XUMM Wallet and awaits its verification

These options can be passed:
- An onSignIn handler to perform an action when the sign in has been initiated
- An onSignInVerified to perform an action when the sign in has been verified

This hook returns:
- The signIn function to start the process
- A data object with the address and access token

### useVerifySignIn

Hook to verify if a user is signed in correctly or its token has expired

This hook returns:
- The verifySignIn function to start the process
- A data object with the address and access token

### useXumm

This hook provides the XummContext of your app. It is used internally by all hooks.
