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

The right-hand side of Exhibit 6 illustrates the process. In bootstrap, we repeatedly draw samples from the original sample, and each resample is of the same size as the original sample. Note that each item drawn is replaced for the next draw (i.e., the identical element is put back into the group so that it can be drawn more than once). Although some items may appear several times in the resamples, other items may not appear at all.

## Exhibit 6: Bootstrap Resampling

![](https://cdn.mathpix.com/cropped/2025_06_26_c57df200b8436d4bf77fg-2.jpg?height=711&width=1147&top_left_y=650&top_left_x=641)

The mechanics of implementing the simulation for valuing the contingent claim used in the previous lesson using the bootstrap differ only in the source of the random variable used. Instead of being drawn from a probability distribution, under bootstrapping, the random variable is drawn from the sample as described in the discussion related to Exhibit 6. Exhibit 7 shows the steps for the bootstrap process highlighting the differences between the bootstrap process and the Monte Carlo simulation from Exhibit 6.

Exhibit 7: Steps in Implementing Simulation using Bootstrapping
![](https://cdn.mathpix.com/cropped/2025_06_26_c57df200b8436d4bf77fg-2.jpg?height=611&width=1158&top_left_y=1912&top_left_x=641)

The steps in using bootstrap to simulate the contingent claim are then (with the first two steps and the last three steps) the same for bootstrapping as they are for the Monte Carlo simulation:

1. Specify the quantity of interest in terms of underlying variables. The quantity of interest is the contingent claim value, and the underlying variable is the stock price. Then, specify the starting value(s) of the underlying variable(s).
We use $C_{i T}$ to represent the value of the claim at maturity, $T$. The subscript $i$ in $C_{i T}$ indicates that $C_{i T}$ is a value resulting from the $i$ th simulation trial, each simulation trial involving a drawing of random values (an iteration of Step 4).
2. Specify a time grid that is consistent with the periodicity of the sample observations. Take the horizon in terms of calendar time and split it into a number of subperiods-say, $K$ in total. Calendar time divided by the number of subperiods, $K$, is the time increment, $\Delta t$. In the example, calendar time was one year, and $K$ is 12 , so $\Delta t$ equals one month.
3. Specify the method for generating the data used in the simulation. In our example, stock price is the underlying variable for the contingent claim, so we use the observed changes in stock price as our empirical distribution. We use the observed historical behavior of stock price processes: price changes or price returns.
4. Use the simulated values to produce stock prices used to value the contingent claim. Using a computer program or spreadsheet function, draw $K$ random values of stock process from the empirical distribution using the bootstrap procedure. Then, convert the stock price changes ( $\Delta$ Stock price) from Step 3 into the stock price dynamics. The calculation is necessary to convert those changes into a sequence of $K$ stock prices, with the initial stock price as the starting value over the $K$ subperiods. This is an important step: we rely on the distribution of the bootstrapped trials drawn from observed, historical stock price processes.
5. Calculate the average stock price and the value of the contingent claim. Another calculation produces the average stock price during the life of the contingent claim (the sum of $K$ stock prices divided by $K$ ). Then, compute the value of the contingent claim at maturity, $C_{i T}$, and then calculate its present value, $C_{i 0}$, by discounting this terminal value using an appropriate interest rate as of today. (The subscript $i$ in $C_{i 0}$ stands for the $i$ th simulation trial, as it does in $C_{i T}$.) We have now completed one simulation trial.
6. Repeat steps 4 and 5 over the required number of trials. Iteratively, go back to Step 4 until the specified number of trials, $I$, is completed. Finally, produce summary values and statistics for the simulation. The quantity of interest in our example is the mean value of $C_{i 0}$ for the total number of bootstrapping runs $(I=1,000)$. This mean value is the bootstrap estimate of the value of our contingent claim based on the observed empirical distribution.

Again, note that bootstrap simulation is a complement to analytical methods. It provides only statistical estimates based on the empirical distribution created by the bootstrapping process from observed, historical prices and price processes; these are not exact results. Analytical methods, where available, provide more insight into cause-and-effect relationships.

## QUESTION SET

1. What are the main strengths and weaknesses of bootstrapping?

## Solution:

Strengths:

- Bootstrapping is simple to perform.
- Bootstrapping offers a good representation of the statistical features of the population and can simulate sampling from the population by sampling from the observed sample.

Weaknesses:

- Bootstrapping provides only statistical estimates, not exact results.

