its return will be less than $\mathrm{R}_{\mathrm{L}}$ is Normal(-SFRatio), and the safety-first optimal portfolio has the lowest such probability. The criterion is implemented by first calculating each potential portfolio's SFRatio and then choosing the portfolio with the highest SFRatio.

## PORTFOLIO EXPECTED RETURN AND VARIANCE OF RETURN

calculate and interpret the expected value, variance, standard deviation, covariances, and correlations of portfolio returns

The expected return on the portfolio ( $E(R p)$ ) is a weighted average of the expected returns ( $R_{1}$ to $R_{n}$ ) on the component securities using their respective proportions of the portfolio in currency units as weights ( $w_{1}$ to $w_{n}$ ):

$$
\begin{aligned}
& E\left(R_{p}\right)=E\left(w_{1} R_{1}+w_{2} R_{2}+\ldots+w_{n} R_{n}\right) \\
& =w_{1} E\left(R_{1}\right)+w_{2} E\left(R_{2}\right)+\ldots+w_{n} E\left(R_{n}\right)
\end{aligned} .
$$

Suppose we have estimated expected returns on assets in the three-asset portfolio shown in Exhibit 1.

Exhibit 1: Weights and Expected Returns of Sample Portfolio

| Asset Class | Weight | Expected Return (\%) |
| :--- | :---: | :---: |
| S\&P 500 | 0.50 | 13 |
| US long-term corporate bonds | 0.25 | 6 |
| MSCI EAFE | 0.25 | 15 |

We calculate the expected return on the portfolio as 11.75 percent:

$$
\begin{aligned}
& E\left(R_{p}\right)=w_{1} E\left(R_{1}\right)+w_{2} E\left(R_{2}\right)+w_{3} E\left(R_{3}\right) \\
& =0.50(13 \%)+0.25(6 \%)+0.25(15 \%)=11.75 \%
\end{aligned}
$$

Here we are interested in portfolio variance of return as a measure of investment risk. Accordingly, portfolio variance is as follows:

$$
\sigma^{2}\left(\mathrm{R}_{\mathrm{p}}\right)=E\left\{\left[\mathrm{R}_{\mathrm{p}} E\left(\mathrm{R}_{\mathrm{p}}\right)\right]^{2}\right\} .
$$

This is expected variance or variance in a forward-looking sense. To implement this definition of portfolio variance, we use information about the individual assets in the portfolio, but we also need the concept of covariance. To avoid notational clutter, we write $\mathrm{ER}_{\mathrm{p}}$ for $E\left(\mathrm{R}_{\mathrm{p}}\right)$.

## Covariance

Given two random variables $\mathrm{R}_{\mathrm{i}}$ and $\mathrm{R}_{\mathrm{j}}$, the covariance between $\mathrm{R}_{\mathrm{i}}$ and $\mathrm{R}_{\mathrm{j}}$ is as follows:

$$
\operatorname{Cov}\left(R_{i}, R_{j}\right)=E\left[\left(R_{i}-E R_{i}\right)\left(R_{j}-E R_{j}\right)\right] .
$$

Alternative notations are $\sigma\left(\mathrm{R}_{\mathrm{i}}, \mathrm{R}_{\mathrm{j}}\right)$ and $\sigma_{\mathrm{ij}}$. Equation 3 states that the covariance between two random variables is the probability-weighted average of the cross-products of each random variable's deviation from its own expected value. The previous measure is the population covariance and is forward-looking. The sample covariance between two random variables $R_{i}$ and $R_{j}$, based on a sample of past data of size $n$ is as follows:

$$
\operatorname{Cov}\left(R_{i}, R_{j}\right)=\sum_{n=1}^{n}\left(R_{i, t}, \bar{R}_{i}\right)\left(R_{j, t}-E \bar{R}_{j}\right) /(n-1) .
$$

Start with the definition of variance for a three-asset portfolio and see how it decomposes into three variance terms and six covariance terms. Dispensing with the derivation, the result is Equation 5:

$$
\begin{aligned}
& \sigma^{2}\left(R_{p}\right)=E\left[\left(R_{p}-E R_{p}\right)^{2}\right] \\
= & E\left\{\left[w_{1} R_{1}+w_{2} R_{2}+w_{3} R_{3}-E\left(w_{1} R_{1}+w_{2} R_{2}+w_{3} R_{3}\right)\right]^{2}\right\} \\
= & E\left\{\left[w_{1} R_{1}+w_{2} R_{2}+w_{3} R_{3}-w_{1} E R_{1}-w_{2} E R_{2}-w_{3} E R_{3}\right]^{2}\right\} . \\
= & w_{1}^{2} \sigma^{2}\left(R_{1}\right)+w_{1} w_{2} \operatorname{Cov}\left(R_{1}, R_{2}\right)+w_{1} w_{3} \operatorname{Cov}\left(R_{1}, R_{3}\right) \\
+ & w_{1} w_{2} \operatorname{Cov}\left(R_{1}, R_{2}\right)+w_{2}^{2} \sigma^{2}\left(R_{2}\right)+w_{2} w_{3} \operatorname{Cov}\left(R_{2}, R_{3}\right) \\
+ & w_{1} w_{3} \operatorname{Cov}\left(R_{1}, R_{3}\right)+w_{2} w_{3} \operatorname{Cov}\left(R_{2}, R_{3}\right)+w_{2}^{3} \sigma^{2}\left(R_{3}\right) .
\end{aligned}
$$

Noting that the order of variables in covariance does not matter, for example, $\operatorname{Cov}\left(R_{2}, R_{1}\right)$ $=\operatorname{Cov}\left(R_{1}, R_{2}\right)$, and that diagonal variance terms $\sigma^{2}\left(R_{1}\right), \sigma^{2}\left(R_{2}\right)$, and $\sigma^{2}\left(R_{3}\right)$ can be expressed as $\operatorname{Cov}\left(R_{1}, R_{1}\right), \operatorname{Cov}\left(R_{2}, R_{2}\right)$, and $\operatorname{Cov}\left(R_{3}, R_{3}\right)$, respectively, the most compact way to state Equation 5 is

$$
\sigma^{2}\left(R_{p}\right)=\sum_{i=1}^{3} \sum_{j=1}^{3} w_{i} w_{j} \operatorname{Cov}\left(R_{i}, R_{j}\right) .
$$

Moreover, this expression generalizes for a portfolio of any size $n$ to

$$
\sigma^{2}\left(R_{p}\right)=\sum_{i=1}^{n} \sum_{j=1}^{n} w_{i} w_{j} \operatorname{Cov}\left(R_{i}, R_{j}\right) .
$$

Equation 6 shows that individual variances of return constitute part, but not all, of portfolio variance. The three variances are outnumbered by the six covariance terms off the diagonal. If there are 20 assets, there are 20 variance terms and 20(20) - $20=$ 380 off-diagonal covariance terms. A first observation is that as the number of holdings increases, covariance becomes increasingly important, all else equal.

The covariance terms capture how the co-movements of returns affect aggregate portfolio variance. From the definition of covariance, we can establish two essential observations about covariance.

1. We can interpret the sign of covariance as follows:

- Covariance of returns is negative if, when the return on one asset is above its expected value, the return on the other asset tends to be below its expected value (an average inverse relationship between returns).
- Covariance of returns is 0 if returns on the assets are unrelated.

Covariance of returns is positive when the returns on both assets tend to be on the same side (above or below) their expected values at the same time (an average positive relationship between returns). The covariance of a random variable with itself (own covariance) is its own variance: $\operatorname{Cov}(R, R)=$ $E\{[R E(R)][R E(R)]\}=E\left\{[R E(R)]^{2}\right\}=\sigma^{2}(R)$.

Exhibit 2 summarizes the inputs for portfolio expected return (Panel A) and variance of return (Panel B). A complete list of the covariances constitutes all the statistical data needed to compute portfolio variance of return as shown in the covariance matrix in Panel B.

Exhibit 2: Inputs to Portfolio Expected Return and Variance

| A. Inputs to Portfolio Expected Return |  |  |  |
| :--- | :--- | :--- | :--- |
| Asset | A | B | C |
|  | $E\left(\mathrm{R}_{\mathrm{A}}\right)$ | $E\left(\mathrm{R}_{\mathrm{B}}\right)$ | $E\left(\mathrm{R}_{\mathrm{C}}\right)$ |
| B. Covariance Matrix: The Inputs to Portfolio Variance of Return |  |  |  |
| Asset | A | B | C |
| A | $\operatorname{Cov}\left(R_{\mathrm{A}} R_{\mathrm{A}}, R_{\mathrm{A}} R_{\mathrm{A}}\right)$ | $\operatorname{Cov}\left(R_{\mathrm{A}}, R_{\mathrm{B}}\right)$ | $\operatorname{Cov}\left(R_{\mathrm{A}}, R_{\mathrm{C}}\right)$ |
| B | $\operatorname{Cov}\left(R_{\mathrm{B}}, R_{\mathrm{A}}\right)$ | $\boldsymbol{\operatorname { C o v }}\left(\boldsymbol{R}_{\mathbf{B}} \boldsymbol{R}_{\mathbf{B}}, \boldsymbol{R}_{\mathbf{B}} \boldsymbol{R}_{\mathbf{B}}\right)$ | $\operatorname{Cov}\left(R_{\mathrm{B}}, R_{\mathrm{C}}\right)$ |
| C | $\operatorname{Cov}\left(R_{\mathrm{C}}, R_{\mathrm{A}}\right)$ | $\operatorname{Cov}\left(R_{\mathrm{C}}, R_{\mathrm{B}}\right)$ | $\operatorname{Cov}\left(R_{\mathrm{C}} R_{\mathrm{C}}, R_{\mathrm{C}} R_{\mathrm{C}}\right)$ |

With three assets, the covariance matrix has $3^{2}=3 \times 3=9$ entries, but the diagonal terms, the variances (bolded in Exhibit 2), are treated separately from the off-diagonal terms. So, there are $9-3=6$ covariances, excluding variances. But $\operatorname{Cov}\left(R_{\mathrm{B}}, R_{\mathrm{A}}\right)=\operatorname{Cov}\left(R_{\mathrm{A}}, R_{\mathrm{B}}\right), \operatorname{Cov}\left(R_{\mathrm{C}}, R_{\mathrm{A}}\right)=\operatorname{Cov}\left(R_{\mathrm{A}}, R_{\mathrm{C}}\right)$, and $\operatorname{Cov}\left(R_{\mathrm{C}}, R_{\mathrm{B}}\right)=$ $\operatorname{Cov}\left(R_{\mathrm{B}}, R_{\mathrm{C}}\right)$. The covariance matrix below the diagonal is the mirror image of the covariance matrix above the diagonal, so you only need to use one (i.e., either below or above the diagonal). As a result, there are only $6 / 2=3$ distinct covariance terms to estimate. In general, for $n$ securities, there are $n(n-1) / 2$ distinct covariances and $n$ variances to estimate.

Suppose we have the covariance matrix shown in Exhibit 3 with returns expressed as a percentage. The table entries are shown as return percentages squared $\left(\%^{2}\right)$. The terms $38 \%^{2}$ and $400 \%^{2}$ are 0.0038 and 0.0400 , respectively, stated as decimals; the correct usage of percents and decimals leads to identical answers.

Exhibit 3: Covariance Matrix

|  | S\&P 500 | US Long-Term Corporate Bonds | MSCI EAFE |
| :--- | :--- | :--- | :--- |
| S\&P 500 | 400 | 45 | 189 |
| US long-term corporate bonds | 45 | 81 | 38 |
| MSCI EAFE | 189 | 38 | 441 |

Taking Equation 5 and grouping variance terms together produces the following:

$$
\begin{aligned}
& \sigma^{2}\left(R_{p}\right)=w_{1}^{2} \sigma^{2}\left(R_{1}\right)+w_{2}^{2} \sigma^{2}\left(R_{2}\right)+w_{2}^{3} \sigma^{2}\left(R_{3}\right)+2 w_{1} w_{2} \operatorname{Cov}\left(R_{1}, R_{2}\right) \\
+ & 2 w_{1} w_{3} \operatorname{Cov}\left(R_{1}, R_{3}\right)+2 w_{2} w_{3} \operatorname{Cov}\left(R_{2}, R_{3}\right) \\
= & (0.50)^{2}(400)+(0.25)^{2}(81)+(0.25)^{2}(441) \\
+ & 2(0.50)(0.25)(45)+2(0.50)(0.25)(189) \\
+ & 2(0.25)(0.25)(38) \\
= & 100+5.0625+27.5625+11.25+47.25+4.75=195.875 .
\end{aligned}
$$

The variance is 195.875 . Standard deviation of return is $195.875^{1 / 2}=14 \%$. To summarize, the portfolio has an expected annual return of 11.75 percent and a standard deviation of return of 14 percent.

Looking at the first three terms in the calculation above, their sum ( 100 $+5.0625+27.5625)$ is 132.625 , the contribution of the individual variances to portfolio variance. If the returns on the three assets were independent, covariances would be 0 and the standard deviation of portfolio return would be $132.625^{1 / 2}=11.52$ percent as compared to 14 percent before, so a less risky portfolio. If the covariance terms were negative, then a negative number would be added to 132.625 , so portfolio variance and risk would be even smaller, while expected return would not change. For the same expected portfolio return, the portfolio has less risk. This risk reduction is a diversification benefit, meaning a risk-reduction benefit from holding a portfolio of assets. The diversification benefit increases with decreasing covariance. This observation is a key insight of modern portfolio theory. This insight is even more intuitively stated when we can use the concept of correlation.

## Correlation

The correlation between two random variables, $R_{i}$ and $R_{j}$, is defined as follows:

$$
\rho\left(\mathrm{R}_{\mathrm{i}}, \mathrm{R}_{\mathrm{j}}\right)=\operatorname{Cov}\left(\mathrm{R}_{\mathrm{i}}, \mathrm{R}_{\mathrm{j}}\right) /\left[\sigma\left(\mathrm{R}_{\mathrm{i}}\right) \sigma\left(\mathrm{R}_{\mathrm{j}}\right)\right] .
$$

Alternative notations are $\operatorname{Corr}\left(\mathrm{R}_{\mathrm{i}}, \mathrm{R}_{\mathrm{j}}\right)$ and $\rho_{\mathrm{ij}}$.
The above definition of correlation is forward-looking because it involves dividing the forward-looking covariance by the product of forward-looking standard deviations. Frequently, covariance is substituted out using the relationship $\operatorname{Cov}\left(R_{i}, R_{j}\right)=\rho\left(R_{i}, R_{j}\right)$ $\sigma\left(R_{i}\right) \sigma\left(R_{j}\right)$. Like covariance, the correlation coefficient is a measure of linear association. However, the division in the definition makes correlation a pure number (without a unit of measurement) and places bounds on its largest and smallest possible values, which are +1 and -1 , respectively.

If two variables have a strong positive linear relation, then their correlation will be close to +1 . If two variables have a strong negative linear relation, then their correlation will be close to -1 . If two variables have a weak linear relation, then their correlation will be close to 0 . Using the previous definition, we can state a correlation matrix from data in the covariance matrix alone. Exhibit 4 shows the correlation matrix.

## Exhibit 4: Correlation Matrix of Returns

|  | S\&P 500 | US Long-Term Corporate Bonds | MSCI EAFE |
| :--- | :--- | :--- | :--- |
| S\&P 500 | 1.00 | 0.25 | 0.45 |
| US long-term corporate bonds | 0.25 | 1.00 | 0.20 |
| MSCI EAFE | 0.45 | 0.20 | 1.00 |

For example, from Exhibit 3, we know the covariance between long-term bonds and MSCI EAFE is 38 . The standard deviation of long-term bond returns is $81^{1 / 2}$ $=9$ percent, that of MSCI EAFE returns is $441^{1 / 2}=21$ percent, from diagonal terms in Exhibit 3. The correlation $\rho\left(R_{\text {long-term bonds }}, R_{\text {EAFE }}\right)$ is $38 /[(9 \%)(21 \%)]$ $=0.201$, rounded to 0.20 . The correlation of the S\&P 500 with itself equals 1 : The calculation is its own covariance divided by its standard deviation squared.

## EXAMPLE 1

## Portfolio Expected Return and Variance of Return with Varying Portfolio Weights

Anna Cintara is constructing different portfolios from the following two stocks:
Exhibit 5: Description of Two-Stock Portfolio

|  | Stock 1 | Stock 2 |
| :--- | :--- | :--- |
| Expected return | 4\% | 8\% |
| Standard deviation | 6\% | 15\% |
| Current portfolio weights | 0.40 | 0.60 |
| Correlation between returns |  |  |

1. Calculate the covariance between the returns on the two stocks.

## Solution:

The correlation between two stock returns is $\rho\left(R_{i}, R_{j}\right)=\operatorname{Cov}\left(R_{i}, R_{j}\right) /\left[\sigma\left(R_{i}\right)\right.$ $\left.\sigma\left(R_{j}\right)\right]$, so the covariance is $\operatorname{Cov}\left(R_{i}, R_{j}\right)=\rho\left(R_{i}, R_{j}\right) \sigma\left(R_{i}\right) \sigma\left(R_{j}\right)$. For these two stocks, the covariance is $\operatorname{Cov}\left(R_{1}, R_{2}\right)=\rho\left(R_{1}, R_{2}\right) \sigma\left(R_{1}\right) \sigma\left(R_{2}\right)=0.30$ (6) (15) = 27.
2. What is the portfolio expected return and standard deviation if Cintara puts 100 percent of her investment in Stock $1\left(w_{1}=1.00\right.$ and $\left.w_{2}=0.00\right)$ ? What is the portfolio expected return and standard deviation if Cintara puts 100 percent of her investment in Stock $2\left(w_{1}=0.00\right.$ and $\left.w_{2}=1.00\right)$ ?

## Solution:

If the portfolio is 100 percent invested in Stock 1, the portfolio has an expected return of 4 percent and a standard deviation of 6 percent. If the portfolio is 100 percent invested in Stock 2, the portfolio has an expected return of 8 percent and a standard deviation of 15 percent.
3. What are the portfolio expected return and standard deviation using the current portfolio weights?

## Solution:

For the current 40/60 portfolio, the expected return is

$$
E\left(\mathrm{R}_{\mathrm{p}}\right)=w_{1} E\left(R_{1}\right)+\left(1-w_{1}\right) E\left(R_{2}\right)=0.40(4 \%)+0.60(8 \%)=6.4 \%
$$

The portfolio variance and standard deviation are as follows:

$$
\begin{aligned}
& \sigma^{2}\left(R_{p}\right)=w_{1}^{2} \sigma^{2}\left(R_{1}\right)+w_{2}^{2} \sigma^{2}\left(R_{2}\right)+2 w_{1} w_{2} \operatorname{Cov}\left(R_{1}, R_{2}\right) \\
= & (0.40)^{2}(36)+(0.60)^{2}(225)+2(0.40)(0.60)(27) \\
= & 5.76+81+12.96=99.72 \\
& \sigma\left(R_{p}\right)=99.72^{1 / 2} \\
= & 9.99 \%
\end{aligned}
$$

4. Calculate the expected return and standard deviation of the portfolios when $w_{1}$ goes from 0.00 to 1.00 in 0.10 increments (and $w_{2}=1-w_{1}$ ). Place the
results (stock weights, portfolio expected return, and portfolio standard deviation) in a table, and then sketch a graph of the results with the standard deviation on the horizontal axis and expected return on the vertical axis.

## Solution:

The portfolio expected returns, variances, and standard deviations for the different sets of portfolio weights are given in the following table. Three of the rows are already computed in the solutions to 2 and 3 , and the other rows are computed using the same expected return, variance, and standard deviation formulas as in the solution to 3 :

| Stock 1 weight | Stock 2 weight | Expected return (\%) | Variance ( $\%^{2}$ ) | Standard deviation (\%) |
| :--- | :--- | :--- | :--- | :--- |
| 1.00 | 0.00 | 4.00 | 36.00 | 6.00 |
| 0.90 | 0.10 | 4.40 | 36.27 | 6.02 |
| 0.80 | 0.20 | 4.80 | 40.68 | 6.38 |
| 0.70 | 0.30 | 5.20 | 49.23 | 7.02 |
| 0.60 | 0.40 | 5.60 | 61.92 | 7.87 |
| 0.50 | 0.50 | 6.00 | 78.75 | 8.87 |
| 0.40 | 0.60 | 6.40 | 99.72 | 9.99 |
| 0.30 | 0.70 | 6.80 | 124.83 | 11.17 |
| 0.20 | 0.80 | 7.20 | 154.08 | 12.41 |
| 0.10 | 0.90 | 7.60 | 187.47 | 13.69 |
| 0.00 | 1.00 | 8.00 | 225.00 | 15.00 |

The graph of the expected return and standard deviation follows:
![](https://cdn.mathpix.com/cropped/2025_06_26_93fa8c032865dd85af0ag-6.jpg?height=540&width=868&top_left_y=1451&top_left_x=783)

## QUESTION SET

![](https://cdn.mathpix.com/cropped/2025_06_26_93fa8c032865dd85af0ag-6.jpg?height=106&width=101&top_left_y=2072&top_left_x=1706)

1. US and Spanish bonds returns measured in the same currency units have standard deviations of 0.64 and 0.56 , respectively. If the correlation between the two bonds is 0.24 , the covariance of returns is closest to:
A. 0.086 .
B. 0.335.

| C. 0.390. <br> Solution: <br> A is correct. The covariance is the product of the standard deviations and correlation using the formula $\operatorname{Cov}$ (US bond returns, Spanish bond returns) $=\sigma(\mathrm{US}$ bonds $) \times \sigma($ Spanish bonds $) \times \rho(\mathrm{US}$ bond returns, Spanish bond returns) $=0.64 \times 0.56 \times 0.24=0.086$. |
| :--- |
| 2. The covariance of returns is positive when the returns on two assets tend to: <br> A. have the same expected values. <br> B. be above their expected value at different times. <br> C. be on the same side of their expected value at the same time. <br> Solution: <br> C is correct. The covariance of returns is positive when the returns on both assets tend to be on the same side (above or below) their expected values at the same time, indicating an average positive relationship between returns. |
| 3. Which of the following correlation coefficients indicates the weakest linear relationship between two variables? <br> A. -0.67 <br> B. -0.24 <br> C. 0.33 <br> Solution: <br> B is correct. Correlations near +1 exhibit strong positive linearity, whereas correlations near -1 exhibit strong negative linearity. A correlation of 0 indicates an absence of any linear relationship between the variables. The closer the correlation is to 0 , the weaker the linear relationship. |
| 4. An analyst develops the following covariance matrix of returns: <br> Hedge Fund Market Index <br> Hedge fund 256110 <br> $\begin{array}{lll}\text { Market index } & 110 & 81\end{array}$ <br> The correlation of returns between the hedge fund and the market index is closest to: <br> A. 0.005 . <br> B. 0.073. <br> C. 0.764. <br> Solution: <br> C is correct. The correlation between two random variables $\mathrm{R}_{\mathrm{i}}$ and $\mathrm{R}_{\mathrm{j}}$ is defined as $\rho\left(R_{i}, R_{j}\right)=\operatorname{Cov}\left(R_{i}, R_{j}\right) /\left[\sigma\left(R_{i}\right) \sigma\left(R_{j}\right)\right]$. Using the subscript $i$ to represent hedge funds and the subscript $j$ to represent the market index, the standard deviations are $\sigma\left(R_{i}\right)=256^{1 / 2}=16$ and $\sigma\left(R_{j}\right)=81^{1 / 2}=9$. Thus, $\rho\left(R_{i}, R_{j}\right)=$ $\operatorname{Cov}\left(\mathrm{R}_{\mathrm{i}}, \mathrm{R}_{\mathrm{i}}\right) /\left[\sigma\left(\mathrm{R}_{\mathrm{i}}\right) \sigma\left(\mathrm{R}_{\mathrm{i}}\right)\right]=110 /(16 \times 9)=0.764$. |

5. All else being equal, as the correlation between two assets approaches +1.0 , the diversification benefits:
A. decrease.
B. stay the same.
C. increase.

Solution:
A is correct. As the correlation between two assets approaches +1 , diversification benefits decrease. In other words, an increasingly positive correlation indicates an increasingly strong positive linear relationship and fewer diversification benefits.
6. Given a portfolio of five stocks, how many unique covariance terms, excluding variances, are required to calculate the portfolio return variance?
A. 10
B. 20
C. 25

Solution:
A is correct. A covariance matrix for five stocks has $5 \times 5=25$ entries. Subtracting the 5 diagonal variance terms results in 20 off-diagonal entries. Because a covariance matrix is symmetrical, only 10 entries are unique ( $20 / 2$ $=10$ ).
7. Which of the following statements is most accurate? If the covariance of returns between two assets is 0.0023 , then the:
A. assets' risk is near zero.
B. asset returns are unrelated.
C. asset returns have a positive relationship.

Solution:
C is correct. The covariance of returns is positive when the returns on both assets tend to be on the same side (above or below) their expected values at the same time.
8. A two-stock portfolio includes stocks with the following characteristics:

|  | Stock 1 | Stock 2 |
| :--- | :--- | :--- |
| Expected return | 7\% | 10\% |
| Standard deviation | 12\% | 25\% |
| Portfolio weights | 0.30 | 0.70 |
| Correlation |  |  |

What is the standard deviation of portfolio returns?
A. 14.91 percent
B. 18.56 percent

## C. 21.10 percent

## Solution:

B is correct. The covariance between the returns for the two stocks is $\operatorname{Cov}\left(R_{1}, R_{2}\right)=\rho\left(R_{1}, R_{2}\right) \sigma\left(R_{1}\right) \sigma\left(R_{2}\right)=0.20(12)(25)=60$. The portfolio variance is

$$
\begin{aligned}
& \sigma^{2}\left(R_{p}\right)=w_{1}^{2} \sigma^{2}\left(R_{1}\right)+w_{2}^{2} \sigma^{2}\left(R_{2}\right)+2 w_{1} w_{2} \operatorname{Cov}\left(R_{1}, R_{2}\right) \\
= & (0.30)^{2}(12)^{2}+(0.70)^{2}(25)^{2}+2(0.30)(0.70)(60) \\
= & 12.96+306.25+25.2=344.41
\end{aligned}
$$

The portfolio standard deviation is

$$
\sigma^{2}\left(R_{p}\right)=344.41^{1 / 2}=18.56 \% .
$$

9. Lena Hunziger has designed the following three-asset portfolio:

|  | Asset 1 | Asset 2 | Asset 3 |
| :--- | :---: | :---: | :---: |
| Expected return | $5 \%$ | $6 \%$ | $7 \%$ |
| Portfolio weight | $\mathbf{0 . 2 0}$ | 0.30 | 0.50 |

Variance-Covariance Matrix

|  | Asset 1 | Asset 2 | Asset 3 |
| :--- | :---: | :---: | :---: |
| Asset 1 | 196 | 105 | 140 |
| Asset 2 | 105 | 225 | 150 |
| Asset 3 | 140 | 150 | 400 |

Hunziger estimated the portfolio return to be 6.3 percent. What is the portfolio standard deviation?
A. 13.07 percent
B. 13.88 percent
C. 14.62 percent

## Solution:

C is correct. For a three-asset portfolio, the portfolio variance is

$$
\begin{aligned}
& \sigma^{2}\left(R_{p}\right)=w_{1}^{2} \sigma^{2}\left(R_{1}\right)+w_{2}^{2} \sigma^{2}\left(R_{2}\right)+w_{3}^{2} \sigma^{2}\left(R_{3}\right)+2 w_{1} w_{2} \operatorname{Cov}\left(R_{1}, R_{2}\right) \\
+ & 2 w_{1} w_{3} \operatorname{Cov}\left(R_{1}, R_{3}\right)+2 w_{2} w_{3} \operatorname{Cov}\left(R_{2}, R_{3}\right) \\
= & (0.20)^{2}(196)+(0.30)^{2}(225)+(0.50)^{2}(400)+2(0.20)(0.30)(105) \\
+ & 2(0.20)(0.50)(140)+2(0.30)(0.50)(150) \\
= & 7.84+20.25+100+12.6+28+45=213.69
\end{aligned}
$$

The portfolio standard deviation is

$$
\sigma^{2}\left(R_{p}\right)=213.69^{1 / 2}=14.62 \% .
$$

