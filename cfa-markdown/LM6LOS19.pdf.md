- Monte Carlo simulation is widely used to estimate risk and return in investment applications. Specifically, it is commonly used to value securities with complex features, such as embedded options, where no analytic pricing formula is available
- A Monte Carlo simulation generates a large number of random samples from a specified probability distribution or a series of distributions to obtain the likelihood of a range of results.
- Bootstrapping mimics the process of performing random sampling from a population to construct the sampling distribution by treating the randomly drawn sample as if it were the population.
- Because a random sample offers a good representation of the population, bootstrapping can simulate sampling from the population by sampling from the observed sample.


# LOGNORMAL DISTRIBUTION AND CONTINUOUS COMPOUNDING 

explain the relationship between normal and lognormal distributions and why the lognormal distribution is used to model asset prices when using continuously compounded asset returns

## The Lognormal Distribution

Closely related to the normal distribution, the lognormal distribution is widely used for modeling the probability distribution of share and other asset prices. For example, the lognormal distribution appears in the Black-Scholes-Merton option pricing model. The Black-Scholes-Merton model assumes that the price of the asset underlying the option is lognormally distributed.

A random variable $Y$ follows a lognormal distribution if its natural logarithm, ln $Y$, is normally distributed. The reverse is also true: If the natural logarithm of random variable $Y$, ln $Y$, is normally distributed, then $Y$ follows a lognormal distribution. If you think of the term lognormal as "the log is normal," you will have no trouble remembering this relationship.

The two most noteworthy observations about the lognormal distribution are that it is bounded below by 0 and it is skewed to the right (it has a long right tail). Note these two properties in the graphs of the probability density functions (pdfs) of two lognormal distributions in Exhibit 1. Asset prices are bounded from below by 0. In practice, the lognormal distribution has been found to be a usefully accurate description of the distribution of prices for many financial assets. However, the normal distribution is often a good approximation for returns. For this reason, both distributions are very important for finance professionals.

## Exhibit 1: Two Lognormal Distributions

![](https://cdn.mathpix.com/cropped/2025_06_26_46a6a04fc2604c867b9bg-2.jpg?height=459&width=738&top_left_y=318&top_left_x=536)

Like the normal distribution, the lognormal distribution is completely described by two parameters. Unlike many other distributions, a lognormal distribution is defined in terms of the parameters of a different distribution. The two parameters of a lognormal distribution are the mean and standard deviation (or variance) of its associated normal distribution: the mean and variance of $\ln Y$, given that $Y$ is lognormal. So, we must keep track of two sets of means and standard deviations (or variances): (1) the mean and standard deviation (or variance) of the associated normal distribution (these are the parameters) and (2) the mean and standard deviation (or variance) of the lognormal variable itself.

To illustrate this relationship, we simulated 1,000 scenarios of yearly asset returns, assuming that returns are normally distributed with 7 percent mean and 12 percent standard deviation. For each scenario $i$, we converted the simulated continuously compounded returns $\left(r_{i}\right)$ to future asset prices with the formula Price $(1 \text { year later })_{i}=$ USD1 $\times \exp \left(r_{i}\right)$, where exp is the exponential function and assuming that the asset's price is USD1 today. In Exhibit 2, Panel A shows the distribution of the simulated returns together with the fitted normal pdf, whereas Panel B shows the distribution of the corresponding future asset prices together with the fitted lognormal pdf. Again, note that the lognormal distribution of future asset prices is bounded below by 0 and has a long right tail.
A. Normal PDF
![](https://cdn.mathpix.com/cropped/2025_06_26_46a6a04fc2604c867b9bg-3.jpg?height=594&width=931&top_left_y=462&top_left_x=754)
B. Lognormal PDF
![](https://cdn.mathpix.com/cropped/2025_06_26_46a6a04fc2604c867b9bg-3.jpg?height=589&width=925&top_left_y=1207&top_left_x=757)

The expressions for the mean and variance of the lognormal variable are challenging. Suppose a normal random variable $X$ has expected value $\mu$ and variance $\sigma^{2}$. Define $Y$ $=\exp (X)$. Remember that the operation indicated by $\exp (X)$ or $\mathrm{e}^{X}$ (where $e \approx 2.7183$ ) is the opposite operation from taking logs. Because $\ln Y=\ln [\exp (X)]=X$ is normal (we assume $X$ is normal), $Y$ is lognormal. What is the expected value of $Y=\exp (X)$ ? A guess might be that the expected value of $Y$ is $\exp (\mu)$. The expected value is actually $\exp \left(\mu+0.50 \sigma^{2}\right)$, which is larger than $\exp (\mu)$ by a factor of $\exp \left(0.50 \sigma^{2}\right)>1$. To get some insight into this concept, think of what happens if we increase $\sigma^{2}$. The distribution spreads out; it can spread upward, but it cannot spread downward past 0 . As a result, the center of its distribution is pushed to the right: The distribution's mean increases.

The expressions for the mean and variance of a lognormal variable are summarized below, where $\mu$ and $\sigma^{2}$ are the mean and variance of the associated normal distribution (refer to these expressions as needed, rather than memorizing them):

- Mean $\left(\mu_{L}\right)$ of a lognormal random variable $=\exp \left(\mu+0.50 \sigma^{2}\right)$.
- Variance ( $\sigma_{L}{ }^{2}$ ) of a lognormal random variable $=\exp \left(2 \mu+\sigma^{2}\right) \times\left[\exp \left(\sigma^{2}\right)\right.$ $-1]$.


## Continuously Compounded Rates of Return

We now explore the relationship between the distribution of stock return and stock price. In this section, we show that if a stock's continuously compounded return is normally distributed, then future stock price is necessarily lognormally distributed. Furthermore, we show that stock price may be well described by the lognormal distribution even when continuously compounded returns do not follow a normal distribution. These results provide the theoretical foundation for using the lognormal distribution to model asset prices.

Showing that the stock price at some future time $T, P_{T}$, equals the current stock price, $P_{0}$, multiplied by $e$ raised to power $r_{0, T}$, the continuously compounded return from 0 to $T$ :

$$
P_{T}=P_{0} \exp \left(r_{0, \mathrm{~T}}\right) .
$$

We showed in an earlier lesson that $r_{0, T}$, the continuously compounded return to time $T$, is the sum of the one-period continuously compounded returns, as follows:

$$
r_{0, \mathrm{~T}}=r_{T-1, T}+r_{T-2, T-1}+\ldots+r_{0,1} .
$$

If these shorter-period returns are normally distributed, then $r_{0, \mathrm{~T}}$ is normally distributed (given certain assumptions) or approximately normally distributed (not making those assumptions). As $P_{T}$ is proportional to the log of a normal random variable, $P_{T}$ is lognormal.

A key assumption in many investment applications is that returns are independently and identically distributed (i.i.d.). Independence captures the proposition that investors cannot predict future returns using past returns. Identical distribution captures the assumption of stationarity, a property implying that the mean and variance of return do not change from period to period.

Assume that the one-period continuously compounded returns (such as $r_{0,1}$ ) are i.i.d. random variables with mean $\mu$ and variance $\sigma^{2}$ (but making no normality or other distributional assumption). Then,

$$
E\left(r_{0, T}\right)=E\left(r_{T-1, T}\right)+E\left(r_{T-2, T-1}\right)+\ldots+E\left(r_{0,1}\right)=\mu T,
$$

(we add up $\mu$ for a total of $T$ times), and

$$
\sigma^{2}\left(r_{0, \mathrm{~T}}\right)=\sigma^{2} T
$$

(as a consequence of the independence assumption).
The variance of the $T$ holding period continuously compounded return is $T$ multiplied by the variance of the one-period continuously compounded return; also, $\sigma\left(r_{0, T}\right)=\sigma \sqrt{T}$. If the one-period continuously compounded returns on the right-hand side of Equation 1 are normally distributed, then the $T$ holding period continuously compounded return, $r_{0, T}$, is also normally distributed with mean $\mu T$ and variance $\sigma^{2} T$. This is because a linear combination of normal random variables is also a normal random variable.

Even if the one-period continuously compounded returns are not normal, their sum, $r_{0, \mathrm{~T}}$, is approximately normal according to the central limit theorem. Now compare $\mathrm{P}_{\mathrm{T}}$ $=P_{0} \exp \left(r_{0, \mathrm{~T}}\right)$ to $Y=\exp (X)$, where $X$ is normal and $Y$ is lognormal (as we discussed previously). Clearly, we can model future stock price $P_{T}$ as a lognormal random variable because $r_{0, \mathrm{~T}}$ should be at least approximately normal. This assumption of normally distributed returns is the basis in theory for the lognormal distribution as a model for the distribution of prices of shares and other financial assets.

Continuously compounded returns play a role in many asset pricing models, as well as in risk management. Volatility measures the standard deviation of the continuously compounded returns on the underlying asset; by convention, it is stated as an annualized measure. In practice, we often estimate volatility using a historical series of continuously compounded daily returns. We gather a set of daily holding period returns, convert them into continuously compounded daily returns and then compute the standard deviation of the continuously compounded daily returns and annualize that number using Equation 3.

Annualizing is typically done based on 250 days in a year, the approximate number of business days that financial markets are typically open for trading. Thus, if daily volatility were 0.01 , we would state volatility (on an annual basis) as $0.01 \sqrt{250}=0.1581$. Example 1 illustrates the estimation of volatility for the shares of Astra International.

## EXAMPLE 1

## Volatility of Share Price

Suppose you are researching Astra International (Indonesia Stock Exchange: ASII) and are interested in Astra's price action in a week in which international economic news had significantly affected the Indonesian stock market. You decide to use volatility as a measure of the variability of Astra shares during that week. Exhibit 3 shows closing prices during that week.

Exhibit 3: Astra International Daily Closing Prices

| Day | Closing Price (Indonesian rupiah, IDR) |
| :--- | :--- |
| Monday | 6,950 |
| Tuesday | 7,000 |
| Wednesday | 6,850 |
| Thursday | 6,600 |
| Friday | 6,350 |

Use the data provided to do the following:

1. Estimate the volatility of Astra shares. (Annualize volatility on the basis of 250 trading days in a year.)

## Solution:

First, calculate the continuously compounded daily returns; then, find their standard deviation in the usual way. In calculating sample variance, to get sample standard deviation, the divisor is sample size minus 1 .

$$
\begin{aligned}
& \ln (7,000 / 6,950)=0.007168 \\
& \ln (6,850 / 7,000)=-0.021661 \\
& \ln (6,600 / 6,850)=-0.037179 \\
& \ln (6,350 / 6,600)=-0.038615 \\
& \text { Sum }=-0.090287 \\
& \text { Mean }=-0.022572 \\
& \text { Variance }=0.000452 \\
& \text { Standard deviation }=0.021261
\end{aligned}
$$

The standard deviation of continuously compounded daily returns is 0.021261 . Equation 3 states that $\hat{\sigma}\left(r_{0, T}\right)=\hat{\sigma} \sqrt{T}$. In this example, $\hat{\sigma}$ is the sample standard deviation of one-period continuously compounded returns. Thus, $\hat{\sigma}$ refers to 0.021261 . We want to annualize, so the horizon $T$ corresponds to one year. Because $\hat{\sigma}$ is in days, we set $T$ equal to the number of trading days in a year (250).
Therefore, we find that annualized volatility for Astra stock that week was 33.6 percent, calculated as $0.021261 \sqrt{250}=0.336165$.
2. Calculate an estimate of the expected continuously compounded annual return for Astra.

## Solution:

Note that the sample mean, -0.022572 (from the Solution to 1 ), is a sample estimate of the mean, $\mu$, of the continuously compounded one-period or daily returns. The sample mean can be translated into an estimate of the expected continuously compounded annual return using Equation $2, \widehat{\mu}$ $T=-0.022572(250)$ (using 250 to be consistent with the calculation of volatility).
3. Discuss why it may not be prudent to use the sample mean daily return to estimate the expected continuously compounded annual return for Astra.

## Solution:

Four daily return observations are far too few to estimate expected returns. Further, the variability in the daily returns overwhelms any information about expected return in a series this short.
4. Identify the probability distribution for Astra share prices if continuously compounded daily returns follow the normal distribution.

## Solution:

Astra share prices should follow the lognormal distribution if the continuously compounded daily returns on Astra shares follow the normal distribution.

We have shown that the distribution of stock price is lognormal, given certain assumptions. Earlier we gave bullet-point expressions for the mean and variance of a lognormal random variable. In the context of a stock price, the $\widehat{\mu}$ and $\widehat{\sigma}^{2}$ in these expressions would refer to the mean and variance of the $T$ horizon, not the one-period, continuously compounded returns compatible with the horizon of $P_{T}$.

# MONTE CARLO SIMULATION 

describe Monte Carlo simulation and explain how it can be used in investment applications

After gaining an understanding of probability distributions used to characterize asset prices and asset returns, we explore a technique called Monte Carlo simulation in which probability distributions play an integral role. A characteristic of Monte Carlo simulation is the generation of a very large number of random samples from a specified probability distribution or distributions to obtain the likelihood of a range of results.

Monte Carlo simulation is widely used to estimate risk and return in investment applications. In this setting, we simulate the portfolio's profit and loss performance for a specified time horizon, either on an asset-by-asset basis or an aggregate, portfolio basis. Repeated trials within the simulation, each trial involving a draw of random observations from a probability distribution, produce a simulated frequency distribution of portfolio returns from which performance and risk measures are derived.

Another important use of Monte Carlo simulation in investments is as a tool for valuing complex securities for which no analytic pricing formula is available. For other securities, such as mortgage-backed securities with complex embedded options, Monte Carlo simulation is also an important modeling resource. Because we control the assumptions when we carry out a simulation, we can run a model for valuing such securities through a Monte Carlo simulation to examine the model's sensitivity to a change in key assumptions.

To understand the technique of Monte Carlo simulation, we present the process as a series of steps; these can be viewed as providing an overview rather than a detailed recipe for implementing a Monte Carlo simulation in its many varied applications.

To illustrate the steps, we use Monte Carlo simulation to value an option, contingent claim, whose value is based on some other underlying security. For this option, no analytic pricing formula is available. For our purposes, the value of this contingent claim (an Asian option), equals the difference between the underlying stock price at that maturity and the average stock price during the life of the contingent claim or USD 0, whichever is greater. For instance, if the final underlying stock price is USD 34 and the average value over the life of the claim is USD 31, the value of the contingent claim at its maturity is USD 3 (the greater of USD $34-$ USD $31=$ USD 3 and USD 0).

Assume that the maturity of the claim is one year from today; we will simulate stock prices in monthly steps over the next 12 months and will generate 1,000 scenarios to value this claim. The payoff diagram of this contingent claim security is depicted in Panel A of Exhibit 4, a histogram of simulated average and final stock prices is shown in Panel B, and a histogram of simulated payoffs of the contingent claim is presented in Panel C.

The payoff diagram (Panel A) is a snapshot of the contingent claim at maturity. If the stock's final price is less than or equal to its average over the life of the contingent claim, then the payoff would be zero. However, if the final price exceeds the average price, the payoff is equal to this difference. Panel B shows histograms of the simulated

