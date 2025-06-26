## HYPOTHESIS TESTS FOR FINANCE

explain hypothesis testing and its components, including statistical significance, Type I and Type II errors, and the power of a test.

We use hypothesis testing to make decisions using data. Hypothesis testing is part of statistical inference, the process of making judgments about a larger group (a population) based on a smaller group of observations (a sample).

In hypothesis testing, we test to determine whether a sample statistic is likely to come from a population with the hypothesized value of the population parameter.

The concepts and tools of hypothesis testing provide an objective means to gauge whether the available evidence supports the hypothesis. After applying a statistical test, we should have a clearer idea of the probability that a hypothesis is true or not, although our conclusion always stops short of certainty.

The main focus of this lesson is on the framework of hypothesis testing and tests concerning mean and variance, two measures frequently used in investments.

## The Process of Hypothesis Testing

Hypothesis testing is part of the branch of statistics known as statistical inference. In statistical inference, there is estimation and hypothesis testing. Estimation involves point estimates and interval estimates. Consider a sample mean, which is a point estimate, that we can use to form a confidence interval. In hypothesis testing, the focus is examining how a sample statistic informs us about a population parameter. A hypothesis is a statement about one or more populations that we test using sample statistics.

The process of hypothesis testing begins with the formulation of a theory to organize and explain observations. We judge the correctness of the theory by its ability to make accurate predictions-for example, to predict the results of new observations. If the predictions are correct, we continue to maintain the theory as a possibly correct explanation of our observations. Risk plays a role in the outcomes of observations in finance, so we can only try to make unbiased, probability-based judgments about whether the new data support the predictions. Statistical hypothesis testing fills that key role of testing hypotheses when there is uncertainty. When an analyst correctly formulates the question into a testable hypothesis and carries out a test of hypotheses, the use of well-established scientific methods supports the conclusions and decisions made on the basis of this test.

We organize this introduction to hypothesis testing around the six steps presented in Exhibit 1, which illustrate the standard approach to hypothesis testing.

## Exhibit 1: The Process of Hypothesis Testing

![](https://cdn.mathpix.com/cropped/2025_06_26_ffabe460b1adc757d24fg-2.jpg?height=706&width=746&top_left_y=330&top_left_x=844)

## Stating the Hypotheses

For each hypothesis test, we always state two hypotheses: the null hypothesis (or null), designated $H_{0}$, and the alternative hypothesis, designated $\mathrm{H}_{\mathrm{a}}$. The null hypothesis is a statement concerning a population parameter or parameters considered to be true unless the sample we use to conduct the hypothesis test gives convincing evidence that the null hypothesis is false. In fact, the null hypothesis is what we want to reject. If there is sufficient evidence to indicate that the null hypothesis is not true, we reject it in favor of the alternative hypothesis.

Importantly, the null and alternative hypotheses are stated in terms of population parameters, and we use sample statistics to test these hypotheses.

Second, the null and alternative hypotheses must be mutually exclusive and collectively exhaustive; in other words, all possible values are contained in either the null or the alternative hypothesis.

## Identify the Appropriate Test Statistic and Distribution

A test statistic is a value calculated on the basis of a sample that, when used in conjunction with a decision rule, is the basis for deciding whether to reject the null hypothesis.

The focal point of our statistical decision is the value of the test statistic. The test statistic that we use depends on what we are testing.

Following the identification of the appropriate test statistic, we must be concerned with the distribution of the test statistic. We show examples of test statistics, and their corresponding distributions, in Exhibit 2.

Exhibit 2: Test Statistics and Their Distribution

| What We Want to Test | Test Statistic | Probability Distribution of the Statistic | Degrees of Freedom |
| :--- | :--- | :--- | :--- |
| Test of a single mean | $t=\frac{X-\mu_{0}}{s / \sqrt{n}}$ | $t$-distributed | $n-1$ |
| Test of the difference in means |  | $t$-distributed | $n_{1}+n_{2}-2$ |
| Test of the mean of differences | $\begin{aligned} t & =\frac{\left(\bar{X}_{d 1}-\bar{X}_{d 2}\right)-\left(\mu_{d 1}-\mu_{d 2}\right)}{\sqrt{\frac{s_{p}^{2}}{n_{d 1}}+\frac{s_{p}^{2}}{n_{d 2}}}} \\ t & =\frac{\bar{d}-\mu_{d 0}}{s_{\bar{d}}} \end{aligned}$ | $t$-distributed | $n-1$ |
| Test of a single variance | $\chi^{2}=\frac{(n-1) s^{2}}{\sigma_{0}^{2}}$ | Chi-square distributed | $n-1$ |
| Test of the difference in variances | $F=\frac{s_{\text {Before }}^{2}}{s_{\text {After }}^{2}}$ | $F$-distributed | $n_{1}-1, n_{2}-1$ |
| Test of a correlation | $t=\frac{r \sqrt{n-2}}{\sqrt{1-r^{2}}}$ | $t$-Distributed | $n-2$ |
| Test of independence (categorical data) | $\chi^{2}=\sum_{i=1}^{m} \frac{\left.\left(O_{i j}-E_{i j}\right)^{2}\right)}{E_{i j}}$ | Chi-square distributed | $(r-1)(c-1)$ |

Note: $\mu_{0}, \mu_{\mathrm{d} 0}$, and $\sigma_{0}^{2}$ denote hypothesized values of the mean, mean difference, and variance, respectively. The $\bar{x}, \bar{d}, s^{2}, s$, and $r$ denote for a sample the mean, mean of the differences, variance, standard deviation, and correlation, respectively, with subscripts indicating the sample, if appropriate. The sample size is indicated as $n$, and the subscript indicates the sample, if appropriate. $O_{i j}$ and $E_{i j}$ are observed and expected frequencies, respectively, with $r$ indicating the number of rows and $c$ indicating the number of columns in the contingency table.

## Specify the Level of Significance

The level of significance reflects how much sample evidence we require to reject the null hypothesis. The required standard of proof can change according to the nature of the hypotheses and the seriousness of the consequences of making a mistake.

There are four possible outcomes when we test a null hypothesis, as shown in Exhibit 3. A Type I error is a false positive (reject when the null is true), whereas a Type II error is a false negative (fail to reject when the null is false).

## Exhibit 3: Correct and Incorrect Decisions in Hypothesis Testing

| Decision | $H_{0}$ True | $H_{0}$ False |
| :--- | :--- | :--- |
| Fail to reject $\boldsymbol{H}_{0}$ | Correct decision: <br> Do not reject a true null hypothesis. | Type II error: <br> Fail to reject a false null hypothesis. <br> False negative |
| Reject $\boldsymbol{H}_{\mathbf{0}}$ | Type I error: <br> Reject a true null hypothesis. <br> False positive | Correct decision: <br> Reject a false null hypothesis. |
|  |  |  |

When we make a decision in a hypothesis test, we run the risk of making either a Type I or a Type II error. As shown in Exhibit 3, these errors are mutually exclusive: If we mistakenly reject the true null, we can only be making a Type I error; if we mistakenly fail to reject the false null, we can only be making a Type II error.

The probability of a Type I error is denoted by the lowercase Greek letter alpha, $\alpha$. This probability is also known as the level of significance of the test, and its complement, ( $1-\alpha$ ), is the confidence level. For example, a level of significance of 5 percent for a test means that there is a 5 percent probability of rejecting a true null hypothesis and corresponds to the 95 percent confidence level.

Controlling the probabilities of the two types of errors involves a trade-off. All else equal, if we decrease the probability of a Type I error by specifying a smaller significance level (say, 1 percent rather than 5 percent), we increase the probability of making a Type II error because we will reject the null less frequently, including when it is false. Both Type I and Type II errors are risks of being wrong. Whether to accept more of one type versus the other depends on the consequences of the errors, such as costs. This trade-off weighs the impact of errors we are willing to accept and if so, at what cost. The only way to reduce the probabilities of both types of errors simultaneously is to increase the sample size, $n$.

Whereas the significance level of a test is the probability of incorrectly rejecting the true null, the power of a test is the probability of correctly rejecting the null-that is, the probability of rejecting the null when it is false. The power of a test is, in fact, the complement of the Type II error. The probability of a Type II error is often denoted by the lowercase Greek letter beta, $\beta$. We can classify the different probabilities in Exhibit 4 to reflect the notation that is often used.

## Exhibit 4: Probabilities Associated with Hypothesis Testing

Decisions

| Decision | $\boldsymbol{H}_{\mathbf{0}}$ True | $\boldsymbol{H}_{\mathbf{0}}$ False |
| :--- | :---: | :---: |
| Fail to reject $H_{0}$ | $1-\alpha$ | $\beta$ |
| Reject $H_{0}$ | $\alpha$ | $1-\beta$ |

## State the Decision Rule

The fourth step in hypothesis testing is stating the decision rule: When do we reject the null hypothesis, and when do we not? The action we take is based on comparing the calculated sample test statistic with a specified value or values, which are referred to as critical values.

The critical value or values we choose are based on the level of significance and the probability distribution associated with the test statistic. If we find that the calculated value of the test statistic is more extreme than the critical value or values, then we reject the null hypothesis; we say the result is statistically significant. Otherwise, we fail to reject the null hypothesis; there is not sufficient evidence to reject the null hypothesis. Recall that the smallest level of significance at which the null hypothesis can be rejected is the $\mathbf{p}$-value, the area in the probability distribution outside the calculated test statistic.

## QUESTION SET

1. Willco is a manufacturer in a mature cyclical industry. During the most recent industry cycle, its net income averaged USD30 million per year with a standard deviation of USD10 million ( $n=6$ observations). Management claims that Willco's performance during the most recent cycle results from new approaches and that Willco's profitability will exceed the average of USD24 million per year observed in prior cycles.
A. With $\mu$ as the population value of mean annual net income, formulate null and alternative hypotheses consistent with testing Willco management's claim.
B. Assuming that Willco's net income is at least approximately normally distributed, identify the appropriate test statistic and calculate the degrees of freedom.
C. Based on a critical value of 2.015 , determine whether to reject the null hypothesis.

## Solution:

A. We often set up the "hoped for" or "suspected" condition as the alternative hypothesis. Here, that condition is that the population value of Willco's mean annual net income exceeds USD24 million. Thus, we have $H_{0}: \mu \leq 24$ versus $H_{a}: \mu>24$.
B. Given that net income is normally distributed with unknown variance, the appropriate test statistic is a t -statistic with $n-1=6-1=5$ degrees of freedom.
C. We reject the null if the calculated $t$-statistic is greater than 2.015 . The calculated $t$-statistic is

$$
t=\frac{30-24}{10 / \sqrt{6}}=1.4697
$$

D. Because the calculated test statistic does not exceed 2.015, we fail to reject the null hypothesis. There is not sufficient evidence to indicate that the mean net income is greater than USD24 million.
2. All else equal, is specifying a smaller significance level in a hypothesis test likely to increase the probability of a:

|  | Type I error? | Type II error? |
| :--- | :---: | :---: |
| A. | No | No |
| B. | No | Yes |
| C. | Yes | No |

## Solution:

B is correct. Specifying a smaller significance level decreases the probability of a Type I error (rejecting a true null hypothesis) but increases the probability of a Type II error (not rejecting a false null hypothesis). As the level of significance decreases, the null hypothesis is less frequently rejected.
3. For each of the following hypothesis tests concerning the population mean, $\mu$, state the conclusion regarding the test of the hypotheses.
A. $H_{0}: \mu=10$ versus $H_{a}: \mu \neq 10$, with a calculated $t$-statistic of 2.05 and critical $t$-values of $\pm 1.984$.
B. $H_{0}: \mu \leq 10$ versus $H_{a}: \mu>10$, with a calculated $t$-statistic of 2.35 and a critical $t$-value of +1.679
C. $H_{0}: \mu=10$ versus $H_{a}: \mu \neq 10$, with a calculated $t$-statistic of 2.05 , a $p$-value of $4.6352 \%$, and a level of significance of $5 \%$.
D. $H_{0}: \mu \leq 10$ versus $H_{a}: \mu>10$, with a $2 \%$ level of significance and a calculated test statistic with a $p$-value of $3 \%$.

## Solution:

We make the decision either by comparing the calculated test statistic with the critical values or by comparing the $p$-value for the calculated test statistic with the level of significance.
A. Reject the null hypothesis because the calculated test statistic of 2.05 is outside the bounds of the critical values of $\pm 1.984$.
B. Reject the null hypothesis because the calculated test statistic of 2.35 is outside the bounds of the critical value of +1.679 .
C. The p -value corresponding to the calculated test statistic of $4.6352 \%$ is less than the level of significance ( $5 \%$ ), so we reject the null hypothesis.
D. We fail to reject because the p -value for the calculated test statistic of $3 \%$ is greater than the level of significance ( $2 \%$ ).

## TESTS OF RETURN AND RISK IN FINANCE

construct hypothesis tests and determine their statistical significance, the associated Type I and Type II errors, and power of the test given a significance level

Hypothesis tests concerning return and risk are among the most common in finance. The sampling distribution of the mean, when the population standard deviation is unknown, is $t$-distributed, and when the population standard deviation is known, it is normally distributed, or $z$-distributed. Since the population standard deviation is unknown in almost all cases, we will focus on the use of a $t$-distributed test statistic.

## TEST OF A SINGLE MEAN: RISK AND RETURN CHARACTERISTICS OF AN EQUITY MUTUAL FUND

Suppose you are analyzing Sendar Equity Fund,. During the past 24 months, it has achieved a mean monthly return of $1.50 \%$, with a sample standard deviation of monthly returns of 3.60 percent. Given its level of market risk and according to a pricing model, this mutual fund was expected to have earned a 1.10 percent mean monthly return during that time period.

Assuming returns are normally distributed, are the actual results consistent with a population mean monthly return of 1.10 percent?

