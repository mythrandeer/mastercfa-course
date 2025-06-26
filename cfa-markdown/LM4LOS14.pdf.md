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
outcomes $X_{1}, X_{2}, \ldots, \mathrm{X}_{\mathrm{n}}$ (these outcomes form a set of mutually exclusive and exhaustive events). The expected value of $X$ conditional on $S$ is the first outcome, $X_{1}$, times the probability of the first outcome given $S, P\left(X_{1} \mid S\right)$, plus the second outcome, $X_{2}$, times the probability of the second outcome given $S, P\left(X_{2} \mid S\right)$, and so forth, as follows:

$$
E(X \mid S)=P\left(X_{1} \mid S\right) X_{1}+P\left(X_{2} \mid S\right) X_{2}+\ldots+P\left(\mathrm{X}_{\mathrm{n}} \mid S\right) \mathrm{X}_{\mathrm{n}} .
$$

We will illustrate this equation shortly.
Parallel to the total probability rule for stating unconditional probabilities in terms of conditional probabilities, there is a principle for stating (unconditional) expected values in terms of conditional expected values. This principle is the total probability rule for expected value.

## Total Probability Rule for Expected Value

The formula follows:

$$
E(X)=E(X \mid S) P(S)+E\left(X \mid \mathrm{S}^{\mathrm{C}}\right) P\left(\mathrm{~S}^{\mathrm{C}}\right),
$$

where $\mathrm{S}^{\mathrm{C}}$ is the "complement of S ", which means event or scenario " S " does not occur.

$$
E(X)=E\left(X \mid S_{1}\right) P\left(S_{1}\right)+E\left(X \mid S_{2}\right) P\left(S_{2}\right)+\ldots+E\left(X \mid \mathrm{S}_{\mathrm{n}}\right) P\left(\mathrm{~S}_{\mathrm{n}}\right),
$$

where $S_{1}, S_{2}, \ldots, \mathrm{~S}_{\mathrm{n}}$ are mutually exclusive and exhaustive scenarios or events.
The general case, Equation 6, states that the expected value of $X$ equals the expected value of $X$ given Scenario 1, $E\left(X \mid S_{1}\right)$, times the probability of Scenario 1, $P\left(S_{1}\right)$, plus the expected value of $X$ given Scenario 2, $E\left(X \mid S_{2}\right)$, times the probability of Scenario 2, $P\left(S_{2}\right)$, and so forth.

To use this principle, we formulate mutually exclusive and exhaustive scenarios that are useful for understanding the outcomes of the random variable. This approach was employed in developing the probability distribution of BankCorp's EPS in Example 1 , as we now discuss.

## EXAMPLE 2

## BankCorp's Earnings per Share, Part 2

The earnings of BankCorp are interest rate sensitive, benefiting from a declining interest rate environment. Suppose there is a 0.60 probability that BankCorp will operate in a declining interest rate environment in the current fiscal year and a 0.40 probability that it will operate in a stable interest rate environment (assessing the chance of an increasing interest rate environment as negligible). If a declining interest rate environment occurs, the probability that EPS will be USD2.60 is estimated at 0.25 , and the probability that EPS will be USD2.45 is estimated at 0.75 . Note that 0.60 , the probability of declining interest rate environment, times 0.25 , the probability of USD2.60 EPS given a declining interest rate environment, equals 0.15 , the (unconditional) probability of USD2.60 given in the table in Exhibit 1. The probabilities are consistent. Also, $0.60(0.75)=0.45$, the probability of USD2.45 EPS given in Exhibit 1. The probability tree diagram in Exhibit 2 shows the rest of the analysis.

Exhibit 2: BankCorp's Forecasted EPS
![](https://cdn.mathpix.com/cropped/2025_06_26_c48af54f4896aafa943eg-3.jpg?height=499&width=1072&top_left_y=336&top_left_x=684)

A declining interest rate environment points us to the node of the tree that branches off into outcomes of USD2.60 and USD2.45. We can find expected EPS given a declining interest rate environment as follows, using Equation 6:

E(EPS | declining interest rate environment)
$=0.25(\mathrm{USD} 2.60)+0.75(\mathrm{USD} 2.45)$
= USD2.4875
If interest rates are stable,
$E(\mathrm{EPS} \mid$ stable interest rate environment $)=0.60(\mathrm{USD} 2.20)+0.40(\mathrm{USD} 2.00)$
= USD2.12
Once we have the new piece of information that interest rates are stable, for example, we revise our original expectation of EPS from USD2.34 downward to USD2.12. Now using the total probability rule for expected value,

## E(EPS)

$=\mathrm{E}(\mathrm{EPS} \mid$ declining interest rate environment $) \mathrm{P}($ declining interest rate environment $)$
$+\mathrm{E}(\mathrm{EPS} \mid$ stable interest rate environment)P(stable interest rate environment)
So, $E(\mathrm{EPS})=\mathrm{USD} 2.4875(0.60)+\mathrm{USD} 2.12(0.40)=\mathrm{USD} 2.3405$ or about USD2.34.

This amount is identical to the estimate of the expected value of EPS calculated directly from the probability distribution in Example 1. Just as our probabilities must be consistent, so too must our expected values, unconditional and conditional, be consistent; otherwise, our investment actions may create profit opportunities for other investors at our expense.

To review, we first developed the factors or scenarios that influence the outcome of the event of interest. After assigning probabilities to these scenarios, we formed expectations conditioned on the different scenarios. Then we worked backward to formulate an expected value as of today. In the problem just worked, EPS was the event of interest, and the interest rate environment was the factor influencing EPS.

We can also calculate the variance of EPS given each scenario:
$\sigma^{2}$ (EPS $\mid$ declining interest rate environment)
$=P(\mathrm{USD} 2.60 \mid$ declining interest rate environment $)$
$\times[\mathrm{USD} 2.60-E(\mathrm{EPS} \mid \text { declining interest rate environment })]^{2}$
$+P(\mathrm{USD} 2.45 \mid$ declining interest rate environment)

$$
\begin{aligned}
& \times[\mathrm{USD} 2.45-E(\mathrm{EPS} \mid \text { declining interest rate environment })]^{2} \\
& =0.25(\mathrm{USD} 2.60-\mathrm{USD} 2.4875)^{2}+0.75(\mathrm{USD} 2.45-\mathrm{USD} 2.4875)^{2}=0.004219
\end{aligned}
$$

Similarly, $\sigma^{2}$ (EPS | stable interest rate environment) is found to be equal to

$$
=0.60(\mathrm{USD} 2.20-\mathrm{USD} 2.12)^{2}+0.40(\mathrm{USD} 2.00-\mathrm{USD} 2.12)^{2}=0.0096
$$

These are conditional variances, the variance of EPS given a declining interest rate environment and the variance of EPS given a stable interest rate environment. The relationship between unconditional variance and conditional variance is a relatively advanced topic. The main points are that (1) variance, like expected value, has a conditional counterpart to the unconditional concept; and (2) we can use conditional variance to assess risk given a particular scenario.

## EXAMPLE 3

## BankCorp's Earnings per Share, Part 3

Continuing with the BankCorp example, you focus now on BankCorp's cost structure. One model, a simple linear regression model, you are researching for BankCorp's operating costs is

$$
\widehat{Y}=a+b X
$$

where $\widehat{Y}$ is a forecast of operating costs in millions of US dollars and $X$ is the number of branch offices; and $\widehat{Y}$ represents the expected value of $Y$ given $X$, or $E(Y \mid X)$. You interpret the intercept $a$ as fixed costs and $b$ as variable costs. You estimate the equation as follows:

$$
\widehat{Y}=12.5+0.65 X .
$$

BankCorp currently has 66 branch offices, and the equation estimates operating costs as $12.5+0.65(66)=$ USD55.4 million. You have two scenarios for growth, pictured in the tree diagram in Exhibit 3.

## Exhibit 3: BankCorp's Forecasted Operating Costs

![](https://cdn.mathpix.com/cropped/2025_06_26_c48af54f4896aafa943eg-4.jpg?height=564&width=1063&top_left_y=1683&top_left_x=374)

1. Compute the forecasted operating costs given the different levels of operating costs, using $\widehat{Y}=12.5+0.65 X$. State the probability of each level of the number of branch offices. These are the answers to the questions in the terminal boxes of the tree diagram.

## Solution:

Using $\widehat{Y}=12.5+0.65 X$, from top to bottom, we have

| Operating Costs | Probability |
| :--- | :--- |
| $\widehat{Y}=12.5+0.65(125)=$ USD93.75 million | $0.80(0.50)=0.40$ |
| $\widehat{Y}=12.5+0.65(100)=$ USD77.50 million | $0.80(0.50)=0.40$ |
| $\widehat{Y}=12.5+0.65(80)=$ USD64.50 million | $0.20(0.85)=0.17$ |
| $\widehat{Y}=12.5+0.65(70)=$ USD58.00 million | $0.20(0.15)=0.03$ |
|  | Sum = 1.00 |

2. Compute the expected value of operating costs under the high growth scenario. Also calculate the expected value of operating costs under the low growth scenario.

## Solution:

US dollar amounts are in millions.
$\mathrm{E}($ operating costs $\mid$ high growth $)=0.50(\mathrm{USD} 93.75)+0.50(\mathrm{USD} 77.50)$
= USD85.625
$\mathrm{E}($ operating costs $\mid$ low growth $)=0.85(\mathrm{USD} 64.50)+0.15(\mathrm{USD} 58.00)$
= USD63.525
3. Refer to the question in the initial box of the tree: What are BankCorp's expected operating costs?

## Solution:

US dollar amounts are in millions.

$$
\begin{aligned}
& E(\text { operating costs })=E(\text { operating costs } \mid \text { high growth }) P(\text { high growth }) \\
& +E(\text { operatingcosts } \mid \text { low growth }) P(\text { low growth }) \\
& =85.625(0.80)+63.525(0.20)=81.205
\end{aligned}
$$

BankCorp's expected operating costs are USD81.205 million.
In this section, we have treated random variables, such as EPS, as standalone quantities. We have not explored how descriptors, such as expected value and variance of EPS, may be functions of other random variables. Portfolio return is one random variable that is clearly a function of other random variables, the random returns on the individual securities in the portfolio. To analyze a portfolio's expected return and variance of return, we must understand that these quantities are a function of characteristics of the individual securities' returns. Looking at the variance of portfolio return, we see that the way individual security returns move together or covary is key. We cover portfolio expected return, variance of return, and importantly, covariance and correlation in a separate learning module.

## QUESTION SET

![](https://cdn.mathpix.com/cropped/2025_06_26_c48af54f4896aafa943eg-5.jpg?height=109&width=104&top_left_y=2279&top_left_x=1707)

1. Suppose the prospects for recovering principal for a defaulted bond issue depend on which of two economic scenarios prevails. Scenario 1 has probability 0.75 and will result in recovery of USD0.90 per USD1 principal value with probability 0.45 , or in recovery of USD0.80 per USD1 principal
value with probability 0.55 . Scenario 2 has probability 0.25 and will result in recovery of USD0.50 per USD1 principal value with probability 0.85 , or in recovery of USD0.40 per USD1 principal value with probability 0.15 .

Using the data for Scenario 1 and Scenario 2, calculate the following:
A. Compute the expected recovery, given the first scenario.
B. Compute the expected recovery, given the second scenario.
C. Compute the expected recovery.
D. Graph the information in a probability tree diagram.
E. Compute the probability of each of the four possible recovery amounts: USD0.90, USD0.80, USD0.50, and USD0.40.

## Solution:

A. Outcomes associated with Scenario 1: With a 0.45 probability of a USD0.90 recovery per USD1 principal value, given Scenario 1, and with the probability of Scenario 1 equal to 0.75 , the probability of recovering USD0.90 is $0.45(0.75)=0.3375$. By a similar calculation, the probability of recovering USD0.80 is $0.55(0.75)=0.4125$.
Outcomes associated with Scenario 2: With a 0.85 probability of a USD0.50 recovery per USD1 principal value, given Scenario 2, and with the probability of Scenario 2 equal to 0.25 , the probability of recovering USD0.50 is $0.85(0.25)=0.2125$. By a similar calculation, the probability of recovering USD0.40 is $0.15(0.25)=0.0375$.
B. $E($ recovery $\mid$ Scenario 1$)=0.45(\mathrm{USD} 0.90)+0.55(\mathrm{USD} 0.80)=\mathrm{USD} 0.845$
C. $E($ recovery $\mid$ Scenario 2$)=0.85($ USD 0.50$)+0.15($ USD 0.40$)=$ USD 0.485
D. $E($ recovery $)=0.75($ USD 0.845$)+0.25($ USD 0.485$)=$ USD 0.755
![](https://cdn.mathpix.com/cropped/2025_06_26_c48af54f4896aafa943eg-6.jpg?height=492&width=1104&top_left_y=1478&top_left_x=353)

## BAYES' FORMULA AND UPDATING PROBABILITY ESTIMATES

calculate and interpret an updated probability in an investment setting using Bayes' formula

A topic that is often useful in solving investment problems is Bayes' formula: what probability theory has to say about learning from experience.

