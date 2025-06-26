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
final and average stock prices. Note that the simulated final price distribution is wider than the simulated average price distribution. Also, note that the contingent claim's value depends on the difference between the final and average stock prices, which cannot be directly inferred from these histograms.

## Exhibit 4: Payoff Diagram, Histogram of Simulated Average, and Final Stock Prices, and Histogram of Simulated Payoffs for Contingent Claim

A. Contingent Claim Payoff Diagram
![](https://cdn.mathpix.com/cropped/2025_06_26_029cc8d62e720b18de62g-2.jpg?height=546&width=738&top_left_y=665&top_left_x=512)
B. Histogram of Simulated Average and Final Stock Prices
![](https://cdn.mathpix.com/cropped/2025_06_26_029cc8d62e720b18de62g-2.jpg?height=584&width=746&top_left_y=1280&top_left_x=500)
C. Histogram of Simulated Contingent Claim Payoffs
![](https://cdn.mathpix.com/cropped/2025_06_26_029cc8d62e720b18de62g-2.jpg?height=524&width=746&top_left_y=1939&top_left_x=500)

Finally, Panel C shows the histogram of the contingent claim's simulated payoffs. In 654 of 1,000 total trials, the final stock price was less than or equal to the average price, so in 65.4 percent of the trials the contingent claim paid off zero. In the remaining 34.6 percent of the trials, however, the claim paid the positive difference between the final and average prices, with the maximum payoff being USD 11.

The process flowchart in Exhibit 5 shows the steps for implementing the Monte Carlo simulation for valuing this contingent claim. Steps 1 through 3 of the process describe specifying the simulation; Steps 4 through 6 describe running the simulation.

Exhibit 5: Steps in Implementing the Monte Carlo Simulation
![](https://cdn.mathpix.com/cropped/2025_06_26_029cc8d62e720b18de62g-3.jpg?height=613&width=1158&top_left_y=748&top_left_x=638)

The mechanics of implementing the Monte Carlo simulation for valuing the contingent claim using the six-step process are described as follows:

1. Specify the quantity of interest in terms of underlying variables. The quantity of interest is the contingent claim value, and the underlying variable is the stock price. Then, specify the starting value(s) of the underlying variable(s).
We use $C_{i T}$ to represent the value of the claim at maturity, $T$. The subscript $i$ in $C_{i T}$ indicates that $C_{i T}$ is a value resulting from the $i$ th simulation trial, each simulation trial involving a drawing of random values (an iteration of Step 4).
2. Specify a time grid. Take the horizon in terms of calendar time and split it into a number of subperiods-say, $K$ in total. Calendar time divided by the number of subperiods, $K$, is the time increment, $\Delta t$. In our example, calendar time is one year and $K$ is 12 , so $\Delta t$ equals one month.
3. Specify the method for generating the data used in the simulation. This step will require that distributional assumptions be made for the key risk factors that drive the underlying variables. For example, stock price is the underlying variable for the contingent claim, so we need a model for stock price movement, effectively a period return. We choose the following model for changes in stock price, where $Z_{k}$ stands for the standard normal random variable:
$\Delta$ Stock price $=(\mu \times$ Prior stock price $\times \Delta t)+\left(\sigma \times\right.$ Prior stock price $\left.\times Z_{k}\right)$.

The term $Z_{k}$ is the key risk factor in the simulation. Through our choice of $\mu$ (mean) and $\sigma$ (standard deviation), we control the distribution of the stock price variable. Although this example has one key risk factor, a given simulation may have multiple key risk factors.
Then, using a computer program or spreadsheet function, draw $K$ random values of each risk factor. In our example, the spreadsheet function would produce a draw of $K(=12)$ values of the standard normal variable $Z_{k}: Z_{1}, Z_{2}$, $Z_{3}, \ldots, Z_{K}$. We will discuss generating standard normal random numbers (or, in fact, random numbers with any kind of distribution) after describing the sequence of simulation steps.
4. Use the simulated values to produce stock prices used to value the contingent claim. This step will convert the standard normal random numbers generated in Step 3 into stock price changes ( $\Delta$ Stock price) by using the model of stock price dynamics from Step 3. The result is $K$ observations on possible changes in stock price over the $K$ subperiods (remember, $K=$ 12). An additional calculation is needed to convert those changes into a sequence of $K$ stock prices, with the initial stock price as the starting value over the $K$ subperiods. This is an important step: we rely on the distributional assumptions of the Monte Carlo simulation to randomly create a very large number of stock price processes.
5. Calculate the average stock price and the value of the contingent claim. This calculation produces the average stock price during the life of the contingent claim (the sum of $K$ stock prices divided by $K$ ). Then, compute the value of the contingent claim at maturity, $C_{i T}$, and then calculate its present value, $C_{i 0}$, by discounting this terminal value using an appropriate interest rate as of today. (The subscript $i$ in $C_{i 0}$ stands for the $i$ th simulation trial, as it does in $C_{i T}$.) We have now completed one simulation trial.
6. Repeat steps 4 and 5 over the required number of trials. Iteratively, go back to Step 4 until the specified number of trials, $I$, is completed. Finally, produce summary values and statistics for the simulation. The quantity of interest in our example is the mean value of $C_{i 0}$ for the total number of simulation trials $(I=1,000)$. This mean value is the Monte Carlo estimate of the value of our contingent claim.

In Example 2, we continue with the application of Monte Carlo simulation to value another type of contingent claim.

## EXAMPLE 2

## Valuing a Lookback Contingent Claim Using Monte Carlo Simulation

1. A standard lookback contingent claim on a stock has a value at maturity equal to (Value of the stock at maturity - Minimum value of stock during the life of the claim prior to maturity) or USD 0, whichever is greater. If the minimum value reached prior to maturity was USD 20.11 and the value of
the stock at maturity is USD 23, for example, the contingent claim is worth USD 23 - USD 20.11 = USD 2.89.

How might you use Monte Carlo simulation in valuing a lookback contingent claim?

## Solution:

We previously described how to use Monte Carlo simulation to value a certain type of contingent claim. Just as we can calculate the average value of the stock over a simulation trial to value that claim, for a lookback contingent claim, we can also calculate the minimum value of the stock over a simulation trial. Then, for a given simulation trial, we can calculate the terminal value of the claim, given the minimum value of the stock for the simulation trial. We can then discount this terminal value back to the present to get the value of the claim today $(t=0)$. The average of these $t=0$ values over all simulation trials is the Monte Carlo simulated value of the lookback contingent claim.

Finally, note that Monte Carlo simulation is a complement to analytical methods. It provides only statistical estimates, not exact results. Analytical methods, where available, provide more insight into cause-and-effect relationships. However, as financial product innovations proceed, the applications for Monte Carlo simulation in investment management continue to grow.

## QUESTION SET

![](https://cdn.mathpix.com/cropped/2025_06_26_029cc8d62e720b18de62g-5.jpg?height=102&width=101&top_left_y=1261&top_left_x=1706)

1. Define Monte Carlo simulation and explain its use in investment management.

## Solution:

A Monte Carlo simulation generates of a large number of random samples from a specified probability distribution (or distributions) to represent the role of risk in the system. Monte Carlo simulation is widely used to estimate risk and return in investment applications. In this setting, we simulate the portfolio's profit and loss performance for a specified time horizon. Repeated trials within the simulation produce a simulated frequency distribution of portfolio returns from which performance and risk measures are derived. Another important use of Monte Carlo simulation in investments is as a tool for valuing complex securities for which no analytic pricing formula is available. It is also an important modeling resource for securities with complex embedded options.
2. Compared with analytical methods, what are the strengths and weaknesses of using Monte Carlo simulation for valuing securities?

## Solution:

- Strengths: Monte Carlo simulation can be used to price complex securities for which no analytic expression is available, particularly European-style options.
- Weaknesses: Monte Carlo simulation provides only statistical estimates, not exact results. Analytic methods, when available, provide more insight into cause-and-effect relationships than does Monte Carlo simulation.

3. A Monte Carlo simulation can be used to:
A. directly provide precise valuations of call options.
B. simulate a process from historical records of returns.
C. test the sensitivity of a model to changes in assumptions-for example, on distributions of key variables.

## Solution:

C is correct. A characteristic feature of Monte Carlo simulation is the generation of a large number of random samples from a specified probability distribution or distributions to represent the role of risk in the system. Therefore, it is very useful for investigating the sensitivity of a model to changes in assumptions-for example, on distributions of key variables.
4. A limitation of Monte Carlo simulation is:
A. its failure to do "what if" analysis.
B. that it requires historical records of returns.
C. its inability to independently specify cause-and-effect relationships. Solution:

C is correct. Monte Carlo simulation is a complement to analytical methods. Monte Carlo simulation provides statistical estimates and not exact results. Analytical methods, when available, provide more insight into cause-andeffect relationships.

## BOOTSTRAPPING

describe the use of bootstrap resampling in conducting a simulation based on observed data in investment applications

Earlier, we demonstrated how to find the standard error of the sample mean, which can be computed based on the central limit theorem. We now introduce a computational tool called resampling, which repeatedly draws samples from the original observed data sample for the statistical inference of population parameters. Bootstrap, one of the most popular resampling methods, uses computer simulation for statistical inference without using an analytical formula such as a $z$-statistic or $t$-statistic.

The idea behind bootstrap is to mimic the process of performing random sampling from a population to construct the sampling distribution. The difference lies in the fact that we have no knowledge of what the population looks like, except for a sample with size $n$ drawn from the population. Because a random sample offers a good representation of the population, we can simulate sampling from the population by sampling from the observed sample. In other words, the bootstrap mimics the process by treating the randomly drawn sample as if it were the population.

Both the bootstrap and the Monte Carlo simulation build on repetitive sampling. Bootstrapping resamples a dataset as the true population, and infers from the sampling statistical distribution parameter values (i.e., mean, variance, skewness, and kurtosis) for the population. Monte Carlo simulation builds on generating random data with certain known statistical distribution of parameter values.

