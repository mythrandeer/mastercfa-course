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

Formulate and test a hypothesis that the fund's performance was different than the mean return of 1.1 percent inferred from the pricing model. Use a 5 percent level of significance.

Exhibit 5: Test of a Single Mean

| Step 1 | State the hypotheses. | $H_{0}: \mu=1.1 \%$ versus $H_{a}: \mu \neq 1.1 \%$ |
| :--- | :--- | :--- |
| Step 2 | Identify the appropriate test statistic. | $t=\frac{\bar{X}-\mu_{0}}{s / \sqrt{n}}$ <br> with 24-1 = 23 degrees of freedom. |
| Step 3 | Specify the level of significance. | $\alpha=5 \%$ (two tailed). |
| Step 4 | State the decision rule. | Critical $t$-values $= \pm 2.069$. |
|  |  | Reject the null if the calculated $t$-statistic is less than -2.069 , and reject the null if the calculated $t$-statistic is greater than +2.069 . |
|  |  | Excel |
|  |  | Lower: T.INV (0.025,23) |
|  |  | Upper: T.INV (0.975,23) |
|  |  | R qt ( c ( . 025, . 975) , 23) |
|  |  | Python from scipy.stats import $t$ |
|  |  | Lower: t.ppf (.025,23) |
|  |  | Upper: t.ppf (.975,23) |
| Step 5 | Calculate the test statistic. | $t=\frac{1.5-1.1}{3.6 / \sqrt{24}}=0.54433$ |
| Step 6 | Make a decision. | Fail to reject the null hypothesis because the calculated $t$-statistic falls between the two critical values. There is not sufficient evidence to indicate that the population mean monthly return is different from $1.10 \%$. |

Test the hypothesis using the 95 percent confidence interval.
The 95 percent confidence interval is $\bar{X} \pm$ Critical value $\left(\frac{s}{\sqrt{n}}\right)$,so

$$
\begin{aligned}
& \{1.5-2.069(3.6 / \sqrt{24}), 1.5+2.069(3.6 / \sqrt{24})\} \\
& \{1.5-1.5204,1.5+1.5204\} \\
& \{-0.0204,3.0204\}
\end{aligned}
$$

The hypothesized value of 1.1 percent is within the bounds of the 95 percent confidence interval, so we fail to reject the null hypothesis.

## TEST OF A SINGLE VARIANCE: RISK CHARACTERISTICS OF AN EQUITY MUTUAL FUND

Suppose we want to use the observed sample variance of the fund to test whether the true variance of the fund is less than some trigger level, say 4 percent. Performing a test of a population variance requires specifying the hypothesized value of the variance. We can formulate hypotheses concerning whether the variance is equal to a specific value or whether it is greater than or less than a hypothesized value:

One-sided alternative (left tail): $H_{0}: \sigma^{2} \geq \sigma_{0}^{2}$ versus $H_{a}: \sigma^{2}<\sigma_{0}^{2}$.

Note that the fund's variance is less than the trigger level $\sigma_{0}^{2}=4 \%$ if the null hypothesis is rejected in favor of the alternative hypothesis. In tests concerning the variance of a single normally distributed population, we make use of a chisquare test statistic, denoted $\chi^{2}$.

You continue with your analysis of Sendar Equity Fund, a midcap growth fund that has been in existence for only 24 months. During this period, Sendar Equity achieved a mean monthly return of 1.50 percent and a standard deviation of monthly returns of 3.60 percent. Using a 5 percent level of significance, test whether the standard deviation of returns is less than 4 percent. Recall that the standard deviation is the square root of the variance, hence a standard deviation of 4 percent or 0.04 , is a variance of 0.0016 .

## Exhibit 6: Test of Single Variance

| Step 1 | State the hypotheses. | $H_{0}: \sigma^{2} \geq 16$ versus $\mathrm{H}_{\mathrm{a}}: \sigma^{2}<16$ |
| :--- | :--- | :--- |
| Step 2 | Identify the appropriate test statistic. | $\chi^{2}=\frac{(n-1) s^{2}}{\sigma_{0}^{2}}$ |
| Step 3 | Specify the level of significance. | 5\% |
| Step 4 | State the decision rule. | With $24-1=23$ degrees of freedom, the critical value is 13.09051 . <br> We reject the null hypothesis if the calculated $\chi^{2}$ statistic is less than 13.09051. <br> Excel CHISQ.INV (0.05,23) <br> R qchisq (.05,23) <br> Python <br> from scipy.stats import chi2 <br> chi2.ppf $(.05,23)$ |
| Step 5 | Calculate the test statistic. | $\chi^{2}=\frac{(24-1) 12.96}{16}=18.63000$ |
| Step 6 | Make a decision. | Fail to reject the null hypothesis because the calculated $\chi^{2}$ statistic is greater than the critical value. There is insufficient evidence to indicate that the variance is less than $16 \%$ (or, equivalently, that the standard deviation is less than $4 \%$ ). |

## TEST CONCERNING DIFFERENCES BETWEEN MEANS WITH INDEPENDENT SAMPLES

We often want to know whether a mean value-for example, a mean returndiffers for two groups. Is an observed difference due to chance or to different underlying values for the mean? We test this by drawing a sample from each group. When it is reasonable to believe that the samples are from populations that are approximately normally distributed and that the samples are also independent of each other, we use the test of the difference in the means. We may assume that population variances are equal or unequal. However, our focus in discussing the test of the difference of means is using the assumption that the population variances are equal. In the calculation of the test statistic, we combine the observations from both samples to obtain a pooled estimate of the common population variance.

Let $\mu 1$ and $\mu 2$ represent, respectively, the population means of the first and second populations, respectively. Most often we want to test whether the population means are equal or whether one is larger than the other. Thus, we formulate the following hypotheses:
$H_{0}: \mu_{1}-\mu_{2}=0$ versus $H_{a}: \mu_{1}-\mu_{2} \neq 0$.

## EXAMPLE 1

## Comparison of Returns on the ACE High Yield Index for Two Periods

Suppose we want to test whether the returns of the ACE High Yield Total Return Index, shown in Exhibit 7, are different for two different time periods, Period 1 and Period 2.

Exhibit 7: Descriptive Statistics for ACE High Yield Total Return Index for Periods 1 and 2

|  | Period 1 | Period 2 |
| :--- | :--- | :--- |
| Mean | 0.01775\% | 0.01134\% |
| Standard deviation | 0.31580\% | 0.38760\% |
| Sample size | 445 days | 859 days |

Note that these periods are of different lengths and the samples are independent; that is, there is no pairing of the days for the two periods.

1. Is there a difference between the mean daily returns in Period 1 and in Period 2 , using a $5 \%$ level of significance?

## Solution:

| Step 1 | State the hypotheses. |
| :--- | :--- |
| Step 2 | Identify the appropriate test statistic. |
| Step 3 | Specify the level of significance. |
| Step 4 | State the decision rule. |

$$
\begin{aligned}
& H_{0}: \mu_{\text {Period } 1}=\mu_{\text {Period } 2} \text { versus Ha: } \mu_{\text {Period } 1} \neq \mu_{\text {Period } 2} \\
& t=\frac{\left(\bar{X}_{\text {Period } 1}-\bar{X}_{\text {Period } 2}\right)-\left(\mu_{\text {Period } 1}-\mu_{\text {Period } 2}\right)}{s_{p}^{2}}, \\
& \qquad s_{p}^{2}=\frac{\left(n_{\text {peripodiod } 1} \sqrt{\frac{s_{p}^{2}}{s_{\text {period } 1}}+n_{\text {period } 2}-2}\right.}{n_{\text {period } 1}+\left(n_{\text {period } 2}-1\right) s_{\text {Period } 2}^{2}} \\
& \text { where } \\
& \text { with } 445+859-2=1,302 \text { degrees of freedom. } \\
& \alpha=5 \% \\
& \text { Critical } t \text {-values }= \pm 1.962 \\
& \text { Reject the null if the calculated } t \text {-statistic is less than }-1.962 \text {, and reject } \\
& \text { the null if the calculated } t \text {-statistic is greater than }+1.962 .
\end{aligned}
$$

```
Excel
    Lower: T.INV (0.025,1302)
    Upper: T.INV (0.975,1302)
R qt (c(.025,.975),1302)
Python from scipy.stats import t
    Lower: t.ppf (.025,1302)
    Upper: t.ppf (.975,1302)
```

| Step 5 | Calculate the test statistic. | $\begin{aligned} & s_{p}^{2}=\frac{(445-1) 0.09973+(859-1) 0.15023}{445+859-2}=0.1330 \\ & t=\frac{(0.01775-0.01134)-0}{\sqrt{\frac{0.1330}{445}+\frac{0.1330}{859}}}=\frac{0.0064}{0.0213}=0.3009 \end{aligned}$ |
| :--- | :--- | :--- |
| Step 6 | Make a decision. | Fail to reject the null because the calculated $t$-statistic falls within the bounds of the two critical values. We conclude that there is insufficient evidence to indicate that the returns are different for the two time periods. |
|  |  | Test Concerning Differences between Means with Dependent Samples <br> When we compare two independent samples, we use $t$-distributed test statistic that uses the difference in the means and a pooled variance. An assumption for the validity of those tests is that the samples are independent-that is, unrelated to each other. When we want to conduct tests on two means based on samples that we believe are dependent, we use the test of the mean of the differences (a paired comparisons test). <br> How is this test of paired differences different from the test of the difference in means in independent samples? The test of paired comparisons is more powerful than the test of the difference in the means because by using the common element (such as the same periods or companies), we eliminate the variation between the samples that could be caused by something other than what we are testing. |
|  | EXAMPLE 2 |  |
|  | A Comparison of the Returns of Two Indexes <br> Suppose we want to compare the returns of the ACE High Yield Index with those of the ACE BBB Index. We collect data over the same 1,304 days for both indexes and calculate their means and standard deviations as shown in Exhibit 8 . <br> Exhibit 8: Mean and Standard Deviations for the ACE High Yield <br> Index and the ACE BBB Index <br> ACE High Yield ACE BBB Index <br> Index (\%) (\%) Difference (\%) <br> Mean return $\quad 0.0157 \quad 0.0135 \quad-0.0021$ <br> $\begin{array}{llll}\text { Standard deviation } & 0.3157 & 0.3645 & 0.3622\end{array}$ <br> 1. Using a 5 percent level of significance, is the mean of the differences is different from zero? <br> Solution: |  |
|  |  |  |
| Step 1 | State the hypotheses. | $H_{0}: \mu_{\mathrm{d} 0}=0$ versus $\mathrm{H}_{\mathrm{a}}: \mu_{\mathrm{d} 0} \neq 0$ |
| Step 2 | Identify the appropriate test statistic. | $t=\frac{\bar{d}-\mu_{d 0}}{s_{\bar{d}}}$ |
| Step 3 | Specify the level of significance. 5\% |  |

Step 4

Step 5

Step 6

State the decision rule.

Calculate the test statistic.

Make a decision.

With $1,304-1=1,303$ degrees of freedom, the critical values are $\pm 1.962$.
We reject the null hypothesis if the calculated $t$-statistic is less than -1.962 or greater than +1.962 .
Excel
Lower: T. INV (0.025,1303)
Upper: T. INV (0.975,1303)
R qt ( ( $(.025, .975), 1303$
Python from scipy.stats import $t$
Lower: t.ppf (.025,1303)
Upper: t.ppf (.975, 1303)
$\bar{d}=-0.0021 \%$
$s_{d}=\frac{s_{d}}{\sqrt{n}}=\frac{0.3622}{\sqrt{1,304}}=0.01003 \%$
$t=\frac{-0.00210-0}{0.01003}=-0.20937$
Fail to reject the null hypothesis because the calculated $t$-statistic falls within the bounds of the two critical values. There is insufficient evidence to indicate that the mean of the differences of returns is different from zero.C

## Test Concerning the Equality of Two Variances

There are many instances in which we want to compare the volatility of two samples, in which case we can test for the equality of two variances. Examples include comparisons of baskets of securities against indexes or benchmarks, as well as comparisons of volatility in different periods.

## EXAMPLE 3

## Volatility and Regulation

You are investigating whether the population variance of returns on a stock market index changed after a change in market regulation. The first 418 weeks occurred before the regulation change, and the second 418 weeks occurred after the regulation change. You gather the data in Exhibit 9 for 418 weeks of returns both before and after the change in regulation. You have specified a 5 percent level of significance.

Exhibit 9: Index Returns and Variances before and after the Market Regulation Change

|  | N | Mean Weekly <br> Return (\%) | Variance of Returns |
| :--- | :---: | :---: | :---: |
| Before regulation change | 418 | 0.250 | 4.644 |
| After regulation change | 418 | 0.110 | 3.919 |

1. Are the variance of returns different before the regulation change versus after the regulation change?
Solution:

| Step 1 | State the hypotheses. | $H_{0}: \sigma_{\text {Before }}^{2}=\sigma_{\text {After }}^{2}$ versus $H_{a}: \sigma_{\text {Before }}^{2} \neq \sigma_{\text {After }}^{2}$ |
| :--- | :--- | :--- |
| Step 2 | Identify the appropriate test statistic. | $F=\frac{s_{\text {Before }}^{2}}{s_{\text {After }}^{2}}$ |
| Step 3 | Specify the level of significance. | 5\% |
| Step 4 | State the decision rule. | With 418-1=417 and 418-1=417 degrees of freedom, the critical values are 0.82512 and 1.21194. <br> Reject the null if the calculated $F$-statistic is less than 0.82512 or greater than 1.21194. <br> Excel <br> Left side: F. INV (0.025,417,417) <br> Right side: F.INV (0.975,417,417) <br> R qf (c ( . 025, . 975) , 417, 417) <br> Python from scipy.stats import f <br> Left side: f.ppf (.025,417,417) <br> Right side: f.ppf (.975,417,417) |
| Step 5 | Calculate the test statistic. | $F=\frac{4.644}{3.919}=1.18500$ |
| Step 6 | Make a decision. | Fail to reject the null hypothesis since the calculated $F$-statistic falls within the bounds of the two critical values. There is not sufficient evidence to indicate that the weekly variances of returns are different in the periods before and after the regulation change. |
|  |  | 2. Is the variance of returns greater before the regulation change versus after the regulation change? |
| Step 1 | State the hypotheses. | $H_{0}: \sigma_{\text {Before }}^{2} \leq \sigma_{\text {After }}^{2}$ versus $H_{a}: \sigma_{\text {Before }}^{2}>\sigma_{\text {After }}^{2}$ |
| Step 2 | Identify the appropriate test statistic. | $F=\frac{s_{\text {Before }}^{2}}{s_{\text {After }}^{2}}$ |
| Step 3 | Specify the level of significance. | 5\% |
| Step 4 | State the decision rule. | With $418-1=417$ and $418-1=417$ degrees of freedom, the critical value is 1.17502 . <br> We reject the null hypothesis if the calculated $F$-statistic is greater than 1.17502. <br> Excel F.INV (0.95,417,417) <br> R qf (. 95, 417, 417) <br> Python <br> from scipy.stats import f f.ppf(.95,417,417) |
| Step 5 | Calculate the test statistic. | $F=\frac{4.644}{3.919}=1.18500$ |
| Step 6 | Make a decision. | Reject the null hypothesis since the calculated $F$-statistic is greater than 1.17502. There is sufficient evidence to indicate that the weekly variances of returns before the regulation change are greater than the variances after the regulation change. |

## QUESTION SET

Investment analysts often use earnings per share (EPS) forecasts. One test of forecasting quality is the zero-mean test, which states that optimal forecasts should have a mean forecasting error of zero. The forecasting error is the difference between the predicted value of a variable and the actual value of the variable.

You have collected data (shown in Exhibit 10) for two analysts who cover two different industries: Analyst A covers the telecom industry; Analyst B covers automotive parts and suppliers.

## Exhibit 10: Test of Return and Risk

Performance in Forecasting Quarterly Earnings per Share

|  | Number of <br> Forecasts | Mean Forecast Error <br> (Predicted - Actual) | Standard Deviation <br> of Forecast Errors |
| :--- | :---: | :---: | :---: |
| Analyst A | 10 | 0.05 | 0.10 |
| Analyst B | 15 | 0.02 | 0.09 |

Critical $t$-values:

| Degrees of Freedom | Area in the Right-Side Rejection Area |  |
| :--- | :--- | :--- |
|  | $\boldsymbol{p} \boldsymbol{=} \mathbf{0 . 0 5}$ | $\boldsymbol{p} \boldsymbol{=} \mathbf{0 . 0 2 5}$ |
| 8 | 1.860 | 2.306 |
| 9 | 1.833 | 2.262 |
| 10 | 1.812 | 2.228 |
| 11 | 1.796 | 2.201 |
| 12 | 1.782 | 2.179 |
| 13 | 1.771 | 2.160 |
| 14 | 1.761 | 2.145 |
| 15 | 1.753 | 2.131 |
| 16 | 1.746 | 2.120 |
| 17 | 1.740 | 2.110 |
| 18 | 1.734 | 2.101 |
| 19 | 1.729 | 2.093 |
| 20 | 1.725 | 2.086 |
| 21 | 1.721 | 2.080 |
| 22 | 1.717 | 2.074 |
| 23 | 1.714 | 2.069 |
| 24 | 1.711 | 2.064 |
| 25 | 1.708 | 2.060 |
| 26 | 1.706 | 2.056 |
| 27 | 1.703 | 2.052 |

1. With $\mu$ as the population mean forecasting error, formulate null and alternative hypotheses for a zero-mean test of forecasting quality.
A. For Analyst A, determine whether to reject the null at the 0.05 level of significance.
B. For Analyst B, determine whether to reject the null at the 0.05 level of significance.
Solution:
$H_{0}: \mu=0$ versus $H_{a}: \mu \neq 0$.
A. The t -test is based on $t=\frac{\bar{X}-\mu_{0}}{s / \sqrt{n}}$ with $\mathrm{n}-1=10-1=9$ degrees of freedom. At the 0.05 significance level, we reject the null if the calculated t -statistic is outside the bounds of $\pm 2.262$ (from the table for 9 degrees of freedom and 0.025 in the right side of the distribution). For Analyst A, we have a calculated test statistic of
$t=\frac{0.05-0}{0.10 / \sqrt{10}}=1.58114$.
We, therefore, fail to reject the null hypothesis at the 0.05 level.
B. For Analyst B , the t -test is based on t with $15-1=14$ degrees of freedom. At the 0.05 significance level, we reject the null if the calculated t -statistic is outside the bounds of $\pm 2.145$ (from the table for 14 degrees of freedom). The calculated test statistic is
$t=\frac{0.02-0}{0.09 / \sqrt{15}}=0.86066$.
Because 0.86066 is within the range of $\pm 2.145$, we fail to reject the null at the 0.05 level.
2. Reviewing the EPS forecasting performance data for Analysts A and B, you want to investigate whether the larger average forecast errors of Analyst A relative to Analyst B are due to chance or to a higher underlying mean value for Analyst A. Assume that the forecast errors of both analysts are normally distributed and that the samples are independent.
A. Formulate null and alternative hypotheses consistent with determining whether the population mean value of Analyst A's forecast errors ( $\mu_{1}$ ) are larger than Analyst B's $\left(\mu_{2}\right)$.
B. Identify the test statistic for conducting a test of the null hypothesis formulated in Part A.
C. Identify the rejection point or points for the hypotheses tested in Part A at the 0.05 level of significance.
D. Determine whether to reject the null hypothesis at the 0.05 level of significance.

## Solution:

A. Stating the suspected condition as the alternative hypothesis, we have
$H_{0}: \mu_{A}-\mu_{B} \leq 0$ versus $H_{a}: \mu_{A}-\mu_{B}>0$,
where
$\mu_{A}=$ the population mean value of Analyst A's forecast errors
$\mu_{B}=$ the population mean value of Analyst B's forecast errors
B. We have two normally distributed populations with unknown variances. Based on the samples, it is reasonable to assume that the population variances are equal. The samples are assumed to be independent; this assumption is reasonable because the analysts cover different industries. The appropriate test statistic is $t$ using a pooled estimate of the common variance:
$t=\frac{\left(\bar{X}_{1}-\bar{X}_{2}\right)-\left(\mu_{1}-\mu_{2}\right)}{\sqrt{\frac{s_{p}^{2}}{n_{1}}+\frac{s_{p}^{2}}{n_{2}}}}$, where $s_{p}^{2}=\frac{\left(n_{1}-1\right) s_{1}^{2}+\left(n_{2}-1\right) s_{2}^{2}}{n_{1}+n_{2}-2}$.
The number of degrees of freedom is $\mathrm{n}_{\mathrm{A}}+\mathrm{n}_{\mathrm{B}}-2=10+15-2=23$.
C. For $\mathrm{df}=23$, according to the table, the rejection point for a one-sided (right side) test at the 0.05 significance level is 1.714 .
D. We first calculate the pooled estimate of variance:
$s_{p}^{2}=\frac{(10-1) 0.01+(15-1) 0.0081}{10+15-2}=0.0088435$.
We then calculate the $t$-distributed test statistic:
$t=\frac{(0.05-0.02)-0}{\sqrt{\frac{0.0088435}{10}+\frac{0.0088435}{15}}}=\frac{0.03}{0.0383916}=0.78142$.
Because $0.78142<1.714$, we fail to reject the null hypothesis. There is not sufficient evidence to indicate that the mean for Analyst A exceeds that for Analyst B.

An investment consultant gathers two independent random samples of fiveyear performance data for US and European absolute return hedge funds. Noting a return advantage of 50 bps for US managers, the consultant decides to test whether the two means are different from one another at a 0.05 level of significance. The two populations are assumed to be normally distributed with unknown but equal variances. Results of the hypothesis test are contained in the Exhibit 11.

## Exhibit 11: Hypothesis Test Results

| Sample Size | Mean Return (\%) | Standard Deviation |
| :--- | :--- | :--- |
| US managers | 4.7 | 5.4 |
| European managers | 4.2 | 4.8 |
| Null and alternative hypotheses | $H_{0}: \mu_{U S}-\mu_{\mathrm{E}}=0 ; H_{a}: \mu_{U S}-\mu_{\mathrm{E}} \neq 0$ |  |
| Calculated test statistic | 0.4893 |  |
| Critical value rejection points | $\pm 1.984$ |  |

Note: The mean return for US funds is $\mu_{\mathrm{US}}$, and $\mu_{\mathrm{E}}$ is the mean return for European funds.
3. The consultant should conclude that the:
A. null hypothesis is not rejected.
B. alternative hypothesis is statistically confirmed.
C. difference in mean returns is statistically different from zero.

Solution:
A is correct. The calculated $t$-statistic value of 0.4893 falls within the bounds of the critical $t$-values of $\pm 1.984$. Thus, $H_{0}$ cannot be rejected; the result is not statistically significant at the 0.05 level.
4. During a 10-year period, the standard deviation of annual returns on a portfolio you are analyzing was 15 percent a year. You want to see whether this record is sufficient evidence to support the conclusion that the portfolio's underlying variance of return was less than 400 , the return variance of the portfolio's benchmark.
A. Formulate null and alternative hypotheses consistent with your objective.
B. Identify the test statistic for conducting a test of the hypotheses in Part A, and calculate the degrees of freedom.
C. Determine whether the null hypothesis is rejected or not rejected at the 0.05 level of significance using a critical value of 3.325 .

## Solution:

A. We have a "less than" alternative hypothesis, where $\sigma^{2}$ is the variance of return on the portfolio. The hypotheses are $H_{0}: \sigma^{2} \geq 400$ versus $\mathrm{H}_{\mathrm{a}}$ : $\sigma^{2}<400$, where 400 is the hypothesized value of variance. This means that the rejection region is on the left side of the distribution.
B. The test statistic is chi-square distributed with 10-1 $=9$ degrees of freedom.
C. The test statistic is calculated as
$\chi^{2}=\frac{(n-1) s^{2}}{\sigma_{0}^{2}}=\frac{9 \times 15^{2}}{400}=\frac{2,025}{400}=5.0625$, or 5.06 .
Because 5.06 is not less than 3.325, we do not reject the null hypothesis; the calculated test statistic falls to the right of the critical value, where the critical value separates the left-side rejection region from the region where we fail to reject.
We can determine the critical value for this test using software:
Excel [CHISQ.INV (0.05,9)]
[qchisq(.05,9)]
Python
[from scipy.stats import chi2 and chi2.ppf(.05,9)]
We can determine the $p$-value for the calculated test statistic of 17.0953 using software:

Excel [CHISQ.DIST (5.06,9,TRUE)]
[pchisq(5.06,9,lower.tail=TRUE)]
Python

```
[from scipy.stats import chi2 and chi2.
cdf (5.06,9)]
```

5. You are investigating whether the population variance of returns on an index changed subsequent to a market disruption. You gather the following data for 120 months of returns before the disruption and for 120 months of returns after the disruption. You have specified a 0.05 level of significance.

## Exhibit 12: Data for 120 Months of Returns

| Time Period | $\boldsymbol{N}$ | Mean Monthly Return (\%) | Variance of Returns |
| :--- | :---: | :---: | :---: |
| Before disruption | 120 | 1.416 | 22.367 |
| After disruption | 120 | 1.436 | 15.795 |

A. Formulate null and alternative hypotheses consistent with the research goal.
B. Identify the test statistic for conducting a test of the hypotheses in Part A, and calculate the degrees of freedom.
C. Determine whether to reject the null hypothesis at the 0.05 level of significance if the critical values are 0.6969 and 1.4349.

## Solution:

A. We have a "not equal to" alternative hypothesis:
$H_{0}: \sigma_{\text {Before }}^{2}=\sigma_{\text {After }}^{2}$ versus $H_{a}: \sigma_{\text {Before }}^{2} \neq \sigma_{\text {After }}^{2}$.
B. To test a null hypothesis of the equality of two variances, we use an $F$-test:
$F=\frac{s_{1}^{2}}{s_{2}^{2}}$.
$F=22.367 / 15.795=1.416$, with $120-1=119$ numerator and $120-1$ $=119$ denominator degrees of freedom.
C. Because this is a two-tailed test, we use critical values for the $0.05 / 2=$ 0.025 level. The calculated test statistic falls within the bounds of the critical values (i.e., between 0.6969 and 1.4349), so we fail to reject the null hypothesis; there is not enough evidence to indicate that the variances are different before and after the disruption. Note that we could also have formed the F-statistic as 15.796/22.367 = 0.706 and draw the same conclusion.

We could also use software to calculate the critical values:

## Excel

[F.INV (0.025,119,119) and
F.INV (0.975,119,119) ]
[qf (c (.025,.975) ,119,119)]

## Python

```
from scipy.stats import f and f.ppf
[(.025,119,119) and
f.ppf(.975,119,119)]
```

Additionally, we could use software to calculate the $p$-value of the calculated test statistic, which is 5.896 percent, and then compare it with the level of significance:

Excel
[(1-F.DIST(22.367/15.796,119,119,TRUE))*2 or
F.DIST (15.796/22.367,119,119,TRUE) *2]

R
[(1-pf(22.367/15.796,119,119))*2 or
pf (15.796/22.367,119,119) *2]
Python
from scipy.stats import $f$ and $f . c d f$
$[(15.796 / 22.367,119,119) * 2$ or
(1-f.cdf(22.367/15.796,119,119))*2]

## PARAMETRIC VERSUS NONPARAMETRIC TESTS

compare and contrast parametric and nonparametric tests, and describe situations where each is the more appropriate type of test

The hypothesis testing procedures we have discussed up to this point have two characteristics in common. First, they are concerned with parameters, and second, their validity depends on a definite set of assumptions. Mean and variance, for example, are two parameters, or defining quantities, of a normal distribution. The tests also make specific assumptions-in particular, assumptions about the distribution of the population producing the sample. Any test or procedure with either of these two characteristics is a parametric test or procedure.

In some cases, however, we are concerned about quantities other than parameters of distributions. In other cases, we may believe that the assumptions of parametric tests do not hold. In cases where we are examining quantities other than population parameters or where assumptions of the parameters are not satisfied, a nonparametric test or procedure can be useful.

A nonparametric test is a test that is not concerned with a parameter or a test that makes minimal assumptions about the population from which the sample comes. Exhibit 13 presents examples of nonparametric alternatives to the parametric, $t$-distributed tests concerning means.

Exhibit 13: Nonparametric Alternatives to Parametric Tests Concerning
Means

|  | Parametric | Nonparametric |
| :--- | :---: | :--- |
| Tests concerning a single mean | $t$-distributed test | Wilcoxon signed-rank test |
|  | $z$-distributed test |  |

