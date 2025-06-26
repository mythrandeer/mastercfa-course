## FORECASTING CORRELATION OF RETURNS: COVARIANCE GIVEN A JOINT PROBABILITY FUNCTION

![](https://cdn.mathpix.com/cropped/2025_06_26_8bad05fe99b152f676dag-1.jpg?height=118&width=1107&top_left_y=532&top_left_x=666)

How do we estimate return covariance and correlation? Frequently, we make forecasts on the basis of historical covariance or use other methods such as a market model regression based on historical return data. We can also calculate covariance using the joint probability function of the random variables, if that can be estimated. The joint probability function of two random variables $X$ and $Y$, denoted $P(X, Y)$, gives the probability of joint occurrences of values of $X$ and $Y$. For example, $P(X=3, Y=2)$, is the probability that $X$ equals 3 and $Y$ equals 2.

Suppose that the joint probability function of the returns on BankCorp stock $\left(R_{A}\right)$ and the returns on NewBank stock $\left(\mathrm{R}_{\mathrm{B}}\right)$ has the simple structure given in Exhibit 6.

Exhibit 6: Joint Probability Function of BankCorp and NewBank Returns (Entries Are Joint Probabilities)

|  | $\mathbf{R}_{\mathbf{B}}=\mathbf{2 0 \%}$ | $\mathbf{R}_{\mathbf{B}}=\mathbf{1 6 \%}$ | $\mathbf{R}_{\mathbf{B}}=\mathbf{1 0 \%}$ |
| :--- | :---: | :---: | :---: |
| $\mathrm{R}_{\mathrm{A}}=25 \%$ | 0.20 | 0 | 0 |
| $\mathrm{R}_{\mathrm{A}}=12 \%$ | 0 | 0.50 | 0 |
| $\mathrm{R}_{\mathrm{A}}=10 \%$ | 0 | 0 | 0.30 |

The expected return on BankCorp stock is $0.20(25 \%)+0.50(12 \%)+0.30(10 \%)$ $=14 \%$. The expected return on NewBank stock is $0.20(20 \%)+0.50(16 \%)+$ $0.30(10 \%)=15 \%$. The joint probability function above might reflect an analysis based on whether banking industry conditions are good, average, or poor. Exhibit 7 presents the calculation of covariance.

Exhibit 7: Covariance Calculations

| Banking Industry Condition | Deviations BankCorp | Deviations NewBank | Product of Deviations | Probability of Condition | ProbabilityWeighted Product |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Good | 25-14 | 20-15 | 55 | 0.20 | 11 |
| Average | 12-14 | 16-15 | -2 | 0.50 | -1 |
| Poor | 10-14 | 10-15 | 20 | 0.30 | $\operatorname{Cov}\left(\mathrm{R}_{\mathrm{A}}, \mathrm{R}_{\mathrm{B}}\right)$ $=16$ |

Note: Expected return for BankCorp is 14\% and for NewBank, 15\%.
The first and second columns of numbers show, respectively, the deviations of BankCorp and NewBank returns from their mean or expected value. The next column shows the product of the deviations. For example, for good industry conditions, $(25-14)(20-15)=11(5)=55$. Then, 55 is multiplied or weighted
by 0.20 , the probability that banking industry conditions are good: $55(0.20)=11$. The calculations for average and poor banking conditions follow the same pattern. Summing up these probability-weighted products, we find $\operatorname{Cov}\left(R_{A}, R_{B}\right)=16$.

A formula for computing the covariance between random variables $R_{A}$ and $R_{B}$ is

$$
\operatorname{Cov}\left(R_{A}, R_{B}\right)=\sum_{i} \sum_{j} P\left(R_{A, i}, R_{B, j}\right)\left(R_{A, i}-E R_{A}\right)\left(R_{B, j}-E R_{B}\right) .
$$

The formula tells us to sum all possible deviation cross-products weighted by the appropriate joint probability.

Next, we take note of the fact that when two random variables are independent, their joint probability function simplifies.

Two random variables $X$ and $Y$ are independent if and only if $P(X, Y)=P(X) P(Y)$.
For example, given independence, $P(3,2)=P(3) P(2)$. We multiply the individual probabilities to get the joint probabilities. Independence is a stronger property than uncorrelatedness because correlation addresses only linear relationships. The following condition holds for independent random variables and, therefore, also holds for uncorrelated random variables.

The expected value of the product of uncorrelated random variables is the product of their expected values.

$$
E(X Y)=E(X) E(Y) \text { if } X \text { and } Y \text { are uncorrelated. }
$$

Many financial variables, such as revenue (price times quantity), are the product of random quantities. When applicable, the previous rule simplifies the calculation of the expected value of a product of random variables.

## EXAMPLE 2

## Covariances and Correlations of Security Returns

Isabel Vasquez is reviewing the correlations between four of the asset classes in her company portfolio. In Exhibit 8, she plots 24 recent monthly returns for large-cap US stocks versus for large-cap world ex-US stocks (Panel 1) and the 24 monthly returns for intermediate-term corporate bonds versus long-term corporate bonds (Panel 2). Vasquez presents the returns, variances, and covariances in decimal form instead of percentage form. Note the different ranges of their vertical axes (Return \%).

Exhibit 8: Monthly Returns for Four Asset Classes
![](https://cdn.mathpix.com/cropped/2025_06_26_8bad05fe99b152f676dag-3.jpg?height=551&width=611&top_left_y=340&top_left_x=909)
B. Corporate Bond Monthly Returns
![](https://cdn.mathpix.com/cropped/2025_06_26_8bad05fe99b152f676dag-3.jpg?height=491&width=614&top_left_y=958&top_left_x=910)

1. Selected data for the four asset classes are shown in Exhibit 9.

Exhibit 9: Selected Data for Four Asset Classes

| Asset Classes | Large-Cap US Equities | World (ex US) Equities | Intermediate Corp Bonds | Long-Term Corp Bonds |
| :--- | :--- | :--- | :--- | :--- |
| Variance | 0.001736 | 0.001488 | 0.000174 | 0.000699 |
| Standard deviation | 0.041668 | 0.038571 | 0.013180 | 0.026433 |
| Covariance | 0.001349 |  | 0.000318 |  |
| Correlation | 0.87553 |  | 0.95133 |  |

Vasquez noted, as shown in Exhibit 9, that although the two equity classes had much greater variances and covariance than the two bond classes, the correlation between the two equity classes was lower than the correlation between the two bond classes. She also noted that long-term bonds were more volatile (higher variance) than intermediate-term bonds; however, long- and intermediate-term bond returns still had a high correlation.

