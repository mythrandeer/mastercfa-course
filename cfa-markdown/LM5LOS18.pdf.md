## PORTFOLIO RISK MEASURES: APPLICATIONS OF THE NORMAL DISTRIBUTION

define shortfall risk, calculate the safety-first ratio, and identify an optimal portfolio using Roy's safety-first criterion

Modern portfolio theory (MPT) often involves valuing investment opportunities using mean return and variance of return measures. In economic theory, mean-variance analysis holds exactly when investors are risk averse; when they choose investments to maximize expected utility or satisfaction; and when either (assumption 1) returns are normally distributed or (assumption 2) investors have quadratic utility functions (a concept used in economics for a mathematical representation of risk and return trade-offs). Mean-variance analysis, however, can still be useful-that is, it can hold approximately-when either assumption 1 or 2 is violated. Because practitioners prefer to work with observables, such as returns, the proposition that returns are at least approximately normally distributed has played a key role in much of MPT.

To illustrate this concept, assume an investor is saving for retirement. Although her goal is to earn the highest real return possible, she believes that the portfolio should at least achieve real capital preservation over the long term. Assuming a long-term expected inflation rate of 2 percent, the minimum acceptable return would be 2 percent. Exhibit 10 compares three investment alternatives in terms of their expected returns and standard deviation of returns. The probability of falling below 2 percent is calculated on basis of the assumption of normally distributed returns. In Exhibit 10, we see that Portfolio II, which combines the highest expected return and the lowest volatility, has the lowest probability of earning less than 2 percent (or equivalently, the highest probability of earning at least 2 percent). This also can be seen in Panel B, which shows that Portfolio II has the smallest shaded area to the left of 2 percent (the probability of earning less than the minimum acceptable return).

Exhibit 10: Probability of Earning a Minimum Acceptable Return
Panel A: Alternative Portfolio Characteristics

| Portfolio | I | II | II |
| :--- | :--- | :--- | :--- |
| Expected return | 5\% | 8\% | 5\% |
| Standard deviation of return | 8\% | 8\% | 12\% |
| Probability of earning < 2\% [ $P(x<2)]$ | 37.7\% | 24.6\% | 41.7\% |
| Probability of earning $\geq 2 \%[P(x \geq 2)]$ | 62.3\% | 75.4\% | 58.3\% |

# Panel B: Likelihoods of Attainting Minimal Acceptable Return 

## A. Portfolio I

![](https://cdn.mathpix.com/cropped/2025_06_26_2c6e55addbae38b1c78bg-2.jpg?height=372&width=624&top_left_y=459&top_left_x=905)
B. Portfolio II
![](https://cdn.mathpix.com/cropped/2025_06_26_2c6e55addbae38b1c78bg-2.jpg?height=370&width=616&top_left_y=978&top_left_x=912)
C. Portfolio III
![](https://cdn.mathpix.com/cropped/2025_06_26_2c6e55addbae38b1c78bg-2.jpg?height=372&width=619&top_left_y=1489&top_left_x=910)

Mean-variance analysis generally considers risk symmetrically in the sense that standard deviation captures variability both above and below the mean. An alternative approach evaluates only downside risk. We discuss one such approach, safety-first rules, because they provide an excellent illustration of the application of normal distribution theory to practical investment problems. Safety-first rules focus on shortfall risk, the risk that portfolio value (or portfolio return) will fall below some minimum acceptable level over some time horizon. The risk that the assets in a defined benefit plan will fall below plan liabilities is an example of a shortfall risk.

Suppose an investor views any return below a level of $R_{L}$ as unacceptable. Roy's safety-first criterion (Roy 1952) states that the optimal portfolio minimizes the probability that portfolio return, $\mathrm{R}_{\mathrm{P}}$, will fall below the threshold level, $\mathrm{R}_{\mathrm{L}}$. That is, the investor's objective is to choose a portfolio that minimizes $P\left(R_{P}<R_{L}\right)$. When portfolio returns are normally distributed, we can calculate $P\left(R_{P}<R_{L}\right)$ using the number of standard deviations that $R_{L}$ lies below the expected portfolio return, $E\left(R_{P}\right)$. The
portfolio for which $E\left(R_{P}\right)-R_{L}$ is largest relative to standard deviation minimizes $P\left(R_{P}\right.$ $<\mathrm{R}_{\mathrm{L}}$ ). Therefore, if returns are normally distributed, the safety-first optimal portfolio maximizes the safety-first ratio (SFRatio), as follows:

$$
\text { SFRatio }=\left[E\left(R_{P}\right)-R_{L}\right] / \sigma_{P}
$$

The quantity $\mathrm{E}\left(\mathrm{R}_{\mathrm{P}}\right)-\mathrm{R}_{\mathrm{L}}$ is the distance from the mean return to the shortfall level. Dividing this distance by $\sigma_{P}$ gives the distance in units of standard deviation. When choosing among portfolios using Roy's criterion (assuming normality), follow these two steps:

1. Calculate each portfolio's SFRatio.
2. Choose the portfolio with the highest SFRatio.

For a portfolio with a given safety-first ratio, the probability that its return will be less than $\mathrm{R}_{\mathrm{L}}$ is Normal(-SFRatio), and the safety-first optimal portfolio has the lowest such probability. For example, suppose an investor's threshold return, $R_{L}$, is 2 percent. He is presented with two portfolios. Portfolio 1 has an expected return of 12 percent, with a standard deviation of 15 percent. Portfolio 2 has an expected return of 14 percent, with a standard deviation of 16 percent. The SFRatios, using Equation 9, are $0.667=(12-2) / 15$ and $0.75=(14-2) / 16$ for Portfolios 1 and 2, respectively. For the superior Portfolio 2, the probability that portfolio return will be less than 2 percent is $N(-0.75)=1-N(0.75)=1-0.7734=0.227$, or about 23 percent, assuming that portfolio returns are normally distributed.

You may have noticed the similarity of the SFRatio to the Sharpe ratio. If we substitute the risk-free rate, $R_{F}$, for the critical level $R_{L}$, the SFRatio becomes the Sharpe ratio. The safety-first approach provides a new perspective on the Sharpe ratio: When we evaluate portfolios using the Sharpe ratio, the portfolio with the highest Sharpe ratio is the one that minimizes the probability that portfolio return will be less than the risk-free rate (given a normality assumption).

## EXAMPLE 3

## The Safety-First Optimal Portfolio for a Client

You are researching asset allocations for a client in Canada with a CAD800,000 portfolio. Although her investment objective is long-term growth, at the end of a year, she may want to liquidate CAD30,000 of the portfolio to fund educational expenses. If that need arises, she would like to be able to take out the CAD30,000 without invading the initial capital of CAD800,000. Exhibit 11 shows three alternative allocations.

Exhibit 11: Mean and Standard Deviation for Three Allocations (in Percent)

| Allocation | A | B | C |
| :--- | :--- | :--- | :--- |
| Expected annual return | 25 | 11 | 14 |
| Standard deviation of return | 27 | 8 | 20 |

Address these questions (assume normality for Questions 2 and 3):

1. Given the client's desire not to invade the CAD800,000 principal, what is the shortfall level, $\mathrm{R}_{\mathrm{L}}$ ? Use this shortfall level to answer question 2.

## Solution:

Because CAD30,000/CAD800,000 is 3.75 percent, for any return less than 3.75 percent the client will need to invade principal if she takes out CAD30,000. So, $\mathrm{R}_{\mathrm{L}}=3.75 \%$.
2. According to the safety-first criterion, which of the three allocations is the best?
(Hint, to decide which of the three allocations is safety-first optimal, select the alternative with the highest ratio $\left[\mathrm{E}\left(\mathrm{R}_{\mathrm{P}}\right)-\mathrm{R}_{\mathrm{L}}\right] / \sigma_{\mathrm{P}}$ )
A. $0.787037=(25-3.75) / 27$
B. $0.90625=(11-3.75) / 8$
C. $0.5125=(14-3.75) / 20$

Solution:
B is correct. Allocation B, with the largest ratio (0.90625), is the best alternative according to the safety-first criterion.
3. What is the probability that the return on the safety-first optimal portfolio will be less than the shortfall level?

## Solution:

To answer this question, note that $P\left(\mathrm{R}_{\mathrm{B}}<3.75\right)=\operatorname{Normal}(-0.90625)$. We can round 0.90625 to 0.91 for use with tables of the standard normal CDF. First, we calculate $\operatorname{Normal}(-0.91)=1-\operatorname{Normal}(0.91)=1-0.8186=0.1814$, or about 18.1 percent. Using a spreadsheet function for the standard normal CDF on -0.90625 without rounding, we get 0.182402 , or about 18.2 percent. The safety-first optimal portfolio has a roughly 18 percent chance of not meeting a 3.75 percent return threshold. This can be seen in the following graphic, in which Allocation B has the smallest area under the distribution curve to the left of 3.75 percent.
![](https://cdn.mathpix.com/cropped/2025_06_26_2c6e55addbae38b1c78bg-4.jpg?height=451&width=817&top_left_y=1721&top_left_x=806)

Several points are worth noting. First, if the inputs were slightly different, we could get a different ranking. For example, if the mean return on B were 10 percent rather than 11 percent, Allocation A would be superior to B. Second, if meeting the 3.75 percent return threshold were a necessity rather than a wish, CAD830,000 in one year could be modeled as a liability. Fixed-income strategies, such as cash flow matching, could be used to offset or immunize the CAD830,000 quasi-liability.

In many investment contexts besides Roy's safety-first criterion, we use the normal distribution to estimate a probability. Another arena in which the normal distribution plays an important role is financial risk management. Financial institutions, such as investment banks, security dealers, and commercial banks, have formal systems to measure and control financial risk at various levels, from trading positions to the overall risk for the firm. Two mainstays in managing financial risk are value at risk (VaR) and stress testing/scenario analysis. Stress testing and scenario analysis refer to a set of techniques for estimating losses in extremely unfavorable combinations of events or scenarios. Value at risk ( VaR ) is a money measure of the minimum value of losses expected over a specified time period (e.g., a day, a quarter, or a year) at a given level of probability (often 0.05 or 0.01 ). Suppose we specify a one-day time horizon and a level of probability of 0.05 , which would be called a 95 percent one-day VaR. If this VaR equaled EUR5 million for a portfolio, there would be a 0.05 probability that the portfolio would lose EUR5 million or more in a single day (assuming our assumptions were correct). One of the basic approaches to estimating VaR, the variance-covariance or analytical method, assumes that returns follow a normal distribution.

## QUESTION SET

A client has a portfolio of common stocks and fixed-income instruments with a current value of GBP1,350,000. She intends to liquidate GBP50,000 from the portfolio at the end of the year to purchase a partnership share in a business. Furthermore, the client would like to be able to withdraw the GBP50,000 without reducing the initial capital of GBP1,350,000. The following table shows four alternative asset allocations.

## Mean and Standard Deviation for Four Allocations (in Percent)

|  | A | B | C | D |
| :--- | :---: | :---: | :---: | ---: |
| Expected annual return | 16 | 12 | 10 | 9 |
| Standard deviation of return | 24 | 17 | 12 | 11 |

1. Address the following questions (assume normality for Parts B and C):
A. Given the client's desire not to invade the GBP1,350,000 principal, what is the shortfall level, $\mathrm{R}_{\mathrm{L}}$ ? Use this shortfall level to answer Question 2.
B. According to the safety-first criterion, which of the allocations is the best?
C. What is the probability that the return on the safety-first optimal portfolio will be less than the shortfall level, $\mathrm{R}_{\mathrm{L}}$ ?

## Solution:

A. Because GBP50,000/GBP1,350,000 is 3.7 percent, for any return less than 3.7 percent the client will need to invade principal if she takes out GBP50,000. So $R_{L}=3.7$ percent.
B. To decide which of the allocations is safety-first optimal, select the alternative with the highest ratio $\left[E\left(R_{P}\right)-R_{L}\right] / \sigma_{P}$ :

$$
\begin{array}{ll}
\text { Allocation } 1 & 0.5125=(16-3.7) / 24 \\
\text { Allocation } 2 & 0.488235=(12-3.7) / 17 \\
\hline
\end{array}
$$

Allocation $3 \quad 0.525=(10-3.7) / 12$.
Allocation $4 \quad 0.481818=(9-3.7) / 11$.
Allocation C, with the largest ratio (0.525), is the best alternative according to the safety-first criterion.
C. To answer this question, note that $\left.P\left(\mathrm{R}_{\mathrm{C}}<3.7\right)=N(0.037-0.10) / 0.12\right)$ $=\operatorname{Normal}(-0.525)$. By using Excel's NORM.S.DIST() function, we get NORM.S.DIST $((0.037-0.10) / 0.12)=29.98 \%$, or about 30 percent. The safety-first optimal portfolio has a roughly 30 percent chance of not meeting a 3.7 percent return threshold.
2. A client holding a GBP2,000,000 portfolio wants to withdraw GBP90,000 in one year without invading the principal. According to Roy's safety-first criterion, which of the following portfolio allocations is optimal?

|  | Allocation A | Allocation B | Allocation C |
| :--- | :---: | :---: | :---: |
| Expected annual return | $6.5 \%$ | $7.5 \%$ | $8.5 \%$ |
| Standard deviation of returns | $8.35 \%$ | $10.21 \%$ | $14.34 \%$ |

A. Allocation A
B. Allocation B
C. Allocation C

Solution:
B is correct. Allocation B has the highest safety-first ratio. The threshold return level, $\mathrm{R}_{\mathrm{L}}$, for the portfolio is GBP90,000/GBP2,000,000 = 4.5 percent; thus, any return less than $R_{L}=4.5 \%$ will invade the portfolio principal. To compute the allocation that is safety-first optimal, select the alternative with the highest ratio:
$\frac{\left[\mathrm{E}\left(R_{P}-R_{L}\right)\right]}{\sigma_{P}}$.
Allocation $\mathrm{A}=\frac{6.5-4.5}{8.35}=0.240$.
Allocation $\mathrm{B}=\frac{7.5-4.5}{10.21}=0.294$.
Allocation $\mathrm{C}=\frac{8.5-4.5}{14.34}=0.279$.

