## LEARNING MODULE OVERVIEW

- The expected value of a random variable is a probabili-ty-weighted average of the possible outcomes of the random variable. For a random variable $X$, the expected value of $X$ is denoted $E(X)$.
- The variance of a random variable is the expected value (the probabili-ty-weighted average) of squared deviations from the random variable's expected value $E(X): \sigma^{2}(X)=E\left\{[X-E(X)]^{2}\right\}$, where $\sigma^{2}(X)$ stands for the variance of $X$.
- Standard deviation is the positive square root of variance. Standard deviation measures dispersion (as does variance), but it is measured in the same units as the variable.
- A probability tree is a means of illustrating the results of two or more independent events.
- A probability of an event given (conditioned on) another event is a conditional probability. The probability of an event $A$ given an event $B$ is denoted $P(A \mid B)$, and $P(A \mid B)=P(A B) / P(B), P(B) \neq 0$.
- According to the total probability rule, if $S 1, S 2, \ldots, S n$ are mutually exclusive and exhaustive scenarios or events, then $P(A)=P(A \mid S 1)$ $P(S 1)+P(A \mid S 2) P(S 2)+\ldots+P(A \mid S n) P(S n)$.
- Conditional expected value is $E(X \mid S)=P\left(X_{1} \mid S\right) X_{1}+P\left(X_{2} \mid S\right) X_{2}+\ldots$ $+P\left(\mathrm{X}_{\mathrm{n}} \mid S\right) \mathrm{X}_{\mathrm{n}}$ and has an associated conditional variance and conditional standard deviation.
- Bayes' formula is a method used to update probabilities based on new information.
- Bayes' formula is expressed as follows: Updated probability of event given the new information = [(Probability of the new information given event)/(Unconditional probability of the new information)] $\times$ Prior probability of event.


## EXPECTED VALUE AND VARIANCE

calculate expected values, variances, and standard deviations and demonstrate their application to investment problems

The expected value of a random variable is an essential quantitative concept in investments. Investors continually make use of expected values-in estimating the rewards of alternative investments, in forecasting earnings per share (EPS) and other corporate financial variables and ratios, and in assessing any other factor that may affect their financial position. The expected value of a random variable is the probability-weighted average of the possible outcomes of the random variable. For a random variable $X$, the expected value of $X$ is denoted $E(X)$.

Expected value (e.g., expected stock return) looks either to the future, as a forecast, or to the "true" value of the mean (the population mean). We should distinguish expected value from the concepts of historical or sample mean. The sample mean also
summarizes in a single number a central value. However, the sample mean presents a central value for a particular set of observations as an equally weighted average of those observations. In sum, the contrast is forecast versus historical, or population versus sample.

An equation that summarizes the calculation of the expected value for a discrete random variable X is as follows:

$$
E(X)=P\left(X_{1}\right) X_{1}+P\left(X_{2}\right) X_{2}+\ldots+P\left(X_{n}\right) X_{n}=\sum_{i=1}^{n} P\left(X_{i}\right) X_{i},
$$

where $\mathrm{X}_{\mathrm{i}}$ is one of $n$ possible outcomes of the discrete random variable $X$.
The expected value is our forecast. Because we are discussing random quantities, we cannot count on an individual forecast being realized (although we hope that, on average, forecasts will be accurate). It is important, as a result, to measure the risk we face. Variance and standard deviation measure the dispersion of outcomes around the expected value or forecast.

The variance of a random variable is the expected value (the probability-weighted average) of squared deviations from the random variable's expected value:

$$
\sigma^{2}(X)=E[X-E(X)]^{2} .
$$

The two notations for variance are $\sigma^{2}(X)$ and $\operatorname{Var}(X)$.
Variance is a number greater than or equal to 0 because it is the sum of squared terms. If variance is 0 , there is no dispersion or risk. The outcome is certain, and the quantity $X$ is not random at all. Variance greater than 0 indicates dispersion of outcomes. Increasing variance indicates increasing dispersion, all else being equal.

The following equation summarizes the calculation of variance:

$$
\begin{aligned}
& \sigma^{2}(X)=P\left(X_{1}\right)\left[X_{1}-E(X)\right]^{2}+P\left(X_{2}\right)\left[X_{2}-E(X)\right]^{2} \\
& \quad+\ldots+P\left(X_{n}\right)\left[X_{n}-E(X)\right]^{2}=\sum_{i=1}^{n} P\left(X_{i}\right)\left[X_{i}-E(X)\right]^{2}
\end{aligned}
$$

where $\mathrm{X}_{\mathrm{i}}$ is one of $n$ possible outcomes of the discrete random variable $X$.
Variance of $X$ is a quantity in the squared units of $X$. For example, if the random variable is return in percent, variance of return is in units of percent squared. Standard deviation is easier to interpret than variance because it is in the same units as the random variable.Standard deviation is the square root of variance. If the random variable is return in percent, standard deviation of return is also in units of percent. In the following examples, when the variance of returns is stated as a percent or amount of money, to conserve space, we may suppress showing the unit squared.

The best way to become familiar with these concepts is to work examples.

## EXAMPLE 1

## BankCorp's Earnings per Share, Part 1

As part of your work as a banking industry analyst, you build models for forecasting earnings per share of the banks you cover. Today you are studying BankCorp. In Exhibit 1, you have recorded a probability distribution for BankCorp's EPS for the current fiscal year.

Exhibit 1: Probability Distribution for BankCorp's EPS

| Probability | EPS (USD) |
| :--- | :---: |
| 0.15 | 2.60 |
| 0.45 | 2.45 |
| 0.24 | 2.20 |


| Probability | EPS (USD) |
| :--- | :---: |
| 0.16 | 2.00 |
| 1.00 |  |

1. What is the expected value of BankCorp's EPS for the current fiscal year?

## Solution:

Following the definition of expected value, list each outcome, weight it by its probability, and sum the terms.

$$
\begin{aligned}
& E(\mathrm{EPS})=0.15(\mathrm{USD} 2.60)+0.45(\mathrm{USD} 2.45)+0.24(\mathrm{USD} 2.20)+0.16(\mathrm{USD} \\
& 2.00) \\
& =\mathrm{USD} 2.3405
\end{aligned}
$$

The expected value of EPS is USD2.34.
2. Using the probability distribution of EPS from Exhibit 1, you want to measure the dispersion around your forecast. What are the variance and standard deviation of BankCorp's EPS for the current fiscal year?

## Solution:

The order of calculation is always expected value, then variance, and then standard deviation. Expected value has already been calculated. Following the previous definition of variance, calculate the deviation of each outcome from the mean or expected value, square each deviation, weight (multiply) each squared deviation by its probability of occurrence, and then sum these terms.

$$
\begin{aligned}
& \sigma^{2}(\mathrm{EPS})=P(2.60)[2.60-E(\mathrm{EPS})]^{2}+P(2.45)[2.45-E(\mathrm{EPS})]^{2} \\
& +P(2.20)[2.20-E(\mathrm{EPS})]^{2}+P(2.00)[2.00-E(\mathrm{EPS})]^{2} \\
& =0.15(2.60-2.34)^{2}+0.45(2.45-2.34)^{2} \\
& +0.24(2.20-2.34)^{2}+0.16(2.00-2.34)^{2} \\
& =0.01014+0.005445+0.004704+0.018496=0.038785
\end{aligned}
$$

Standard deviation is the positive square root of 0.038785 : $\sigma(\mathrm{EPS})=0.038785^{1 / 2}=0.196939$, or approximately 0.20. EXPECTATIONS
formulate an investment problem as a probability tree and explain the use of conditional expectations in investment application

In investments, we make use of any relevant information available in making our forecasts. When we refine our expectations or forecasts, we are typically updating them based on new information or events; in these cases, we are using conditional expected values. The expected value of a random variable $X$ given an event or scenario $S$ is denoted $E(X \mid S)$. Suppose the random variable $X$ can take on any one of $n$ distinct

