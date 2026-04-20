# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthForgotPasswordResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthLogoutResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRefreshResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRegisterResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthResetPasswordResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthVerifyEmailResponse</a></code>

Methods:

- <code title="post /auth/forgot-password">client.auth.<a href="./src/resources/auth.ts">forgotPassword</a>({ ...params }) -> AuthForgotPasswordResponse</code>
- <code title="post /auth/login">client.auth.<a href="./src/resources/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /auth/logout">client.auth.<a href="./src/resources/auth.ts">logout</a>() -> AuthLogoutResponse</code>
- <code title="post /auth/refresh">client.auth.<a href="./src/resources/auth.ts">refresh</a>() -> AuthRefreshResponse</code>
- <code title="post /auth/register">client.auth.<a href="./src/resources/auth.ts">register</a>({ ...params }) -> AuthRegisterResponse</code>
- <code title="post /auth/reset-password">client.auth.<a href="./src/resources/auth.ts">resetPassword</a>({ ...params }) -> AuthResetPasswordResponse</code>
- <code title="post /auth/verify-email">client.auth.<a href="./src/resources/auth.ts">verifyEmail</a>({ ...params }) -> AuthVerifyEmailResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments/payments.ts">PaymentCreateIntentResponse</a></code>

Methods:

- <code title="post /v1/payments/intents">client.payments.<a href="./src/resources/payments/payments.ts">createIntent</a>({ ...params }) -> PaymentCreateIntentResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/payments/transactions.ts">TransactionClientResponse</a></code>

Methods:

- <code title="get /v1/payments/transactions/{transaction_id}/client">client.payments.transactions.<a href="./src/resources/payments/transactions.ts">client</a>(transactionID) -> TransactionClientResponse</code>

# Customer

Types:

- <code><a href="./src/resources/customer.ts">CustomerLoginResponse</a></code>
- <code><a href="./src/resources/customer.ts">CustomerLogoutResponse</a></code>
- <code><a href="./src/resources/customer.ts">CustomerMeResponse</a></code>
- <code><a href="./src/resources/customer.ts">CustomerVerifyLoginResponse</a></code>

Methods:

- <code title="post /v1/customer/login">client.customer.<a href="./src/resources/customer.ts">login</a>({ ...params }) -> CustomerLoginResponse</code>
- <code title="post /v1/customer/logout">client.customer.<a href="./src/resources/customer.ts">logout</a>() -> CustomerLogoutResponse</code>
- <code title="get /v1/customer/me">client.customer.<a href="./src/resources/customer.ts">me</a>() -> CustomerMeResponse</code>
- <code title="post /v1/customer/login/verify">client.customer.<a href="./src/resources/customer.ts">verifyLogin</a>({ ...params }) -> CustomerVerifyLoginResponse</code>
