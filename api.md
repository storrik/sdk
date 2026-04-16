# Frontend

Types:

- <code><a href="./src/resources/frontend.ts">FrontendForgotPasswordResponse</a></code>
- <code><a href="./src/resources/frontend.ts">FrontendLoginResponse</a></code>
- <code><a href="./src/resources/frontend.ts">FrontendLogoutResponse</a></code>
- <code><a href="./src/resources/frontend.ts">FrontendMeResponse</a></code>
- <code><a href="./src/resources/frontend.ts">FrontendRefreshResponse</a></code>
- <code><a href="./src/resources/frontend.ts">FrontendRegisterResponse</a></code>
- <code><a href="./src/resources/frontend.ts">FrontendResetPasswordResponse</a></code>
- <code><a href="./src/resources/frontend.ts">FrontendVerifyEmailResponse</a></code>

Methods:

- <code title="post /auth/forgot-password">client.frontend.<a href="./src/resources/frontend.ts">forgotPassword</a>({ ...params }) -> FrontendForgotPasswordResponse</code>
- <code title="post /auth/login">client.frontend.<a href="./src/resources/frontend.ts">login</a>({ ...params }) -> FrontendLoginResponse</code>
- <code title="post /auth/logout">client.frontend.<a href="./src/resources/frontend.ts">logout</a>() -> FrontendLogoutResponse</code>
- <code title="get /me">client.frontend.<a href="./src/resources/frontend.ts">me</a>() -> FrontendMeResponse</code>
- <code title="post /auth/refresh">client.frontend.<a href="./src/resources/frontend.ts">refresh</a>() -> FrontendRefreshResponse</code>
- <code title="post /auth/register">client.frontend.<a href="./src/resources/frontend.ts">register</a>({ ...params }) -> FrontendRegisterResponse</code>
- <code title="post /auth/reset-password">client.frontend.<a href="./src/resources/frontend.ts">resetPassword</a>({ ...params }) -> FrontendResetPasswordResponse</code>
- <code title="post /auth/verify-email">client.frontend.<a href="./src/resources/frontend.ts">verifyEmail</a>({ ...params }) -> FrontendVerifyEmailResponse</code>

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
