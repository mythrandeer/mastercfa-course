1. Based on Exhibit 17 and Exhibit 18, describe which assumption(s) of simple linear regression the analyst's model may be violating.

## Solution:

The correct model is not linear, as evident from the pattern of the revenues in Exhibit 17. In the earlier years (i.e., 1 and 2 ) and later years (i.e., 14 and 15), the linear model underestimates revenues, whereas for the middle years (i.e., 7-11), the linear model overestimates revenues. Moreover, the curved pattern of residuals in Exhibit 18 indicates potential heteroskedasticity (residuals have unequal variances), lack of independence of observations, and non-normality (a concern given the small sample size of $n=15$ ). In sum, the analyst should be concerned that her model violates all the assumptions governing simple linear regression (linearity, homoskedasticity, independence, and normality).

## HYPOTHESIS TESTS IN THE SIMPLE LINEAR REGRESSION MODEL

calculate and interpret measures of fit and formulate and evaluate tests of fit and of regression coefficients in a simple linear regression

## Analysis of Variance

The simple linear regression model sometimes describes the relationship between two variables quite well, but sometimes it does not. We must be able to distinguish between these two cases to use regression analysis effectively. Remember our goal is to explain the variation of the dependent variable. So, how well has this goal been achieved, given our choice of independent variable?

## Breaking Down the Sum of Squares Total into Its Components

We begin with the sum of squares total and then break it down into two parts: the sum of squares error and the sum of squares regression (SSR). The sum of squares regression is the sum of the squared differences between the predicted value of the dependent variable, $\widehat{Y}_{i}$, based on the estimated regression line, and the mean of the dependent variable, $\bar{Y}$ :

$$
\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2} .
$$

We have already defined the sum of squares total, which is the total variation in $Y$, and the sum of squares error, the unexplained variation in $Y$. Note that the sum of squares regression is the explained variation in $Y$. So, as illustrated in Exhibit 19, SST $=$ SSR + SSE, meaning total variation in $Y$ equals explained variation in $Y$ plus unexplained variation in $Y$.

## Exhibit 19: Breakdown of Variation of Dependent Variable

![](https://cdn.mathpix.com/cropped/2025_06_02_e30afa11b175f9d7d3c2g-02.jpg?height=693&width=949&top_left_y=315&top_left_x=431)

We show the breakdown of the sum of squares total formula for our ROA regression example in Exhibit 20. The total variation of ROA that we want to explain (SST) is 239.50. This number includes the variation unexplained (SSE), 47.88, and the variation explained (SSR), 191.63. These sum of squares values are important inputs into measures of the fit of the regression line.

## Exhibit 20: Breakdown of the Sum of Squares Total for ROA Model

| Company | ROA ( $\mathrm{Y}_{\mathrm{i}}$ ) | CAPEX ( $\mathrm{X}_{\mathrm{i}}$ ) | Predicted ROA ( $\hat{\gamma}$ ) | Variation to Be Explained $\left(Y_{i}-\bar{Y}\right)^{2}$ | Variation Unexplained $\left(Y_{i}-\widehat{Y}_{i}\right)$ | Variation Explained $\left(\bar{Y}_{i}-\bar{Y}\right)$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| A | 6.0 | 0.7 | 5.750 | 42.25 | 0.063 | 45.563 |
| B | 4.0 | 0.4 | 5.375 | 72.25 | 1.891 | 50.766 |
| C | 15.0 | 5.0 | 11.125 | 6.25 | 15.016 | 1.891 |
| D | 20.0 | 10.0 | 17.375 | 56.25 | 6.891 | 23.766 |
| E | 10.0 | 8.0 | 14.875 | 6.25 | 23.766 | 5.641 |
| F | 20.0 | 12.5 | 20.500 | 56.25 | 0.250 | 64.000 |
|  |  |  |  | 239.50 | 47.88 | 191.625 |
| Mean | 12.50 |  |  |  |  |  |

Sum of squares total $=239.50$.
Sum of squares error $=47.88$.
Sum of squares regression $=191.63$.

## Measures of Goodness of Fit

We can use several measures to evaluate goodness of fit-that is, how well the regression model fits the data. These include the coefficient of determination, the $F$-statistic for the test of fit, and the standard error of the regression.

The coefficient of determination ( $\mathbf{R}^{\mathbf{2}}$ ), also referred to as the $R$-squared or $R^{2}$, is the percentage of the variation of the dependent variable that is explained by the independent variable:

$$
\begin{aligned}
\text { Coefficient of determination } & =\frac{\text { Sum of squares regression }}{\text { Sum of squares total }} \\
\text { Coefficient of determination } & =\frac{\sum_{i=1}^{n}\left(\widehat{Y_{i}}-\bar{Y}\right)^{2}}{\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)^{2}}
\end{aligned}
$$

By construction, the coefficient of determination ranges from 0 percent to 100 percent. In our ROA example, the coefficient of determination is $191.625 \div 239.50$, or 0.8001 , so 80.01 percent of the variation in ROA is explained by CAPEX. In a simple linear regression, the square of the pairwise correlation is equal to the coefficient of determination:

$$
r^{2}=\frac{\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2}}{\sum_{i=1}^{n}\left(Y_{i}-\bar{Y}\right)^{2}}=R^{2}
$$

In our earlier ROA regression analysis, $r=0.8945$, so we now see that $r^{2}$ is indeed equal to the coefficient of determination $\left(R^{2}\right)$, since $(0.8945)^{2}=0.8001$.

Whereas the coefficient of determination-the portion of the variation of the dependent variable explained by the independent variable-is descriptive, it is not a statistical test. To see if our regression model is likely to be statistically meaningful, we will need to construct an $F$-distributed test statistic.

In general, we use an $F$-distributed test statistic to compare two variances. In regression analysis, we can use an $F$-distributed test statistic to test whether the slopes in a regression are equal to zero, with the slopes designated as $b_{i}$, against the alternative hypothesis that at least one slope is not equal to zero:

$$
H_{0}: b_{1}=b_{2}=b_{3}=\ldots=\mathrm{b}_{\mathrm{k}}=0
$$

$H_{a}$ : At least one $b_{k}$ is not equal to zero.
For simple linear regression, these hypotheses simplify to

$$
\begin{aligned}
& H_{0}: b_{1}=0 . \\
& H_{a}: b_{1} \neq 0 .
\end{aligned}
$$

The $F$-distributed test statistic is constructed by using the sum of squares regression and the sum of squares error, each adjusted for degrees of freedom; in other words, it is the ratio of two variances. We divide the sum of squares regression by the number of independent variables, represented by k. In the case of a simple linear regression, $\mathrm{k}=1$, so we arrive at the mean square regression (MSR), which is the same as the sum of squares regression:

$$
\text { MSR }=\frac{\text { Sum of squares regression }}{k}=\frac{\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2}}{1} .
$$

So, for simple linear regression,

$$
\operatorname{MSR}=\sum_{i=1}^{n}\left(\widehat{Y}_{i}-\bar{Y}\right)^{2}
$$

Next, we calculate the mean square error (MSE), which is the sum of squares error divided by the degrees of freedom, which are $n-k-1$. In simple linear regression, $n-k-1$ becomes $n-2$ :

$$
\text { MSE }=\frac{\text { Sum of squares error }}{n-k-1},
$$

$$
\mathrm{MSE}=\frac{\sum_{i=1}^{n}\left(Y_{i}-\widehat{Y}_{i}\right)^{2}}{n-2}
$$

Therefore, the $F$-distributed test statistic (MSR/MSE) is

$$
\begin{aligned}
& F=\frac{\frac{\text { Sum of squares regression }}{k}}{\frac{\text { Sum of squares error }}{n-k-1}}=\frac{\mathrm{MSR}}{\mathrm{MSE}}, \\
& F=\frac{\frac{\sum_{i=1}^{n}\left(\hat{Y}_{i}-\bar{Y}\right)^{2}}{1}}{\frac{\sum_{i=1}^{n}\left(Y_{i}-\hat{Y}_{i}\right)^{2}}{n-2}}
\end{aligned}
$$

which is distributed with 1 and $n-2$ degrees of freedom in simple linear regression. The $F$-statistic in regression analysis is one sided, with the rejection region on the right side, because we are interested in whether the variation in $Y$ explained (the numerator) is larger than the variation in $Y$ unexplained (the denominator).

## Hypothesis Testing of Individual Regression Coefficients

## Hypothesis Tests of the Slope Coefficient

We can use the $F$-statistic to test for the significance of the slope coefficient (i.e., whether it is significantly different from zero), but we also may want to perform other hypothesis tests for the slope coefficient-for example, testing whether the population slope is different from a specific value or whether the slope is positive. We can use a $t$-distributed test statistic to test such hypotheses about a regression coefficient.

Suppose we want to check a stock's valuation using the market model; we hypothesize that the stock has an average systematic risk (i.e., risk similar to that of the market), as represented by the coefficient on the market returns variable. Or we may want to test the hypothesis that economists' forecasts of the inflation rate are unbiased (i.e., on average, not overestimating or underestimating actual inflation rates). In each case, does the evidence support the hypothesis? Such questions as these can be addressed with hypothesis tests on the regression slope. To test a hypothesis about a slope, we calculate the test statistic by subtracting the hypothesized population slope $\left(B_{1}\right)$ from the estimated slope coefficient ( $\widehat{b}_{1}$ ) and then dividing this difference by the standard error of the slope coefficient, $s \hat{b}_{1}$ :

$$
t=\frac{\hat{b}_{1}-B_{1}}{s_{\hat{b}_{1}}} .
$$

This test statistic is $t$-distributed with $n-k-1$ or $n-2$ degrees of freedom because two parameters (an intercept and a slope) were estimated in the regression.

The standard error of the slope coefficient ( $s \hat{b}_{1}$ ) for a simple linear regression is the ratio of the model's standard error of the estimate ( $s_{e}$ ), introduced later, to the square root of the variation of the independent variable:

$$
s_{\hat{b}_{1}}=\frac{s_{e}}{\sqrt{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}} .
$$

We compare the calculated $t$-statistic with the critical values to test hypotheses. Note that the greater the variability of the independent variable, the lower the standard error of the slope (Equation 17) and hence the greater the calculated $t$-statistic (Equation 16). If the calculated $t$-statistic is outside the bounds of the critical $t$-values, we reject the null hypothesis, but if the calculated $t$-statistic is within the bounds of the critical values, we fail to reject the null hypothesis. Similar to tests of the mean, the alternative hypothesis can be two sided or one sided.

Consider our previous simple linear regression example with ROA as the dependent variable and CAPEX as the independent variable. Suppose we want to test whether the slope coefficient of CAPEX is different from zero to confirm our intuition of a significant relationship between ROA and CAPEX. We can test the hypothesis concerning the slope using the six-step process, as we show in Exhibit 21. As a result of this test, we conclude that the slope is different from zero; that is, CAPEX is a significant explanatory variable of ROA.

## Exhibit 21: Test of the Slope for the Regression of ROA on CAPEX

| Step 1 | State the hypotheses. | $H_{0}: b_{1}=0$ versus $H_{a}: b_{1} \neq 0$ |
| :--- | :--- | :--- |
| Step 2 | Identify the appropriate test statistic. | $t=\frac{\hat{b}_{1}-B_{1}}{s \hat{b}_{1}}$ <br> with $6-2=4$ degrees of freedom. |
| Step 3 | Specify the level of significance. | $\alpha=5 \%$. |
| Step 4 | State the decision rule. | Critical $t$-values $= \pm 2.776$. We can determine this from <br> Excel <br> Lower: T.INV (0.025,4) <br> Upper: T.INV (0.975, 4) <br> R: qt (c (.025, .975) , 4) <br> Python: from scipy.stats import $t$ <br> Lower: t.ppf (.025,4) <br> Upper: t.ppf (.975, 4) <br> We reject the null hypothesis if the calculated $t$-statistic is less than -2.776 or greater than +2.776. |
| Step 5 | Calculate the test statistic. | The slope coefficient is 1.25 (Exhibit 6). The mean square error is 11.96875 (Exhibit 39). The variation of CAPEX is 122.640 (Exhibit 6). $s_{e}=\sqrt{11.96875}=3.459588$. |
| Step 6 | Make a decision. | Reject the null hypothesis of a zero slope. There is sufficient evidence to indicate that the slope is different from zero. |

A feature of simple linear regression is that the $t$-statistic used to test whether the slope coefficient is equal to zero and the $t$-statistic to test whether the pairwise correlation is zero (i.e., $H_{0}: \rho=0$ versus $H_{a}: \rho \neq 0$ ) are the same value. Just as with a test of a slope, both two-sided and one-sided alternatives are possible for a test of a correlation-for example, $H_{0}: \rho \leq 0$ versus $H_{a}: \rho>0$. The test-statistic to test whether the correlation is equal to zero is as follows:

$$
t=\frac{r \sqrt{n-2}}{\sqrt{1-r^{2}}} .
$$

In our example of ROA regressed on CAPEX, the correlation $(r)$ is 0.8945 . To test whether this correlation is different from zero, we perform a test of hypothesis, shown in Exhibit 22. As you can see, we draw a conclusion similar to that for our test of the slope, but it is phrased in terms of the correlation between ROA and CAPEX: There is a significant correlation between ROA and CAPEX.

## Exhibit 22: Test of the Correlation between ROA and CAPEX

| Step 1 | State the hypotheses. | $H_{0}: \rho=0$ versus $H_{a}: \rho \neq 0$ |
| :--- | :--- | :--- |
| Step 2 | Identify the appropriate test statistic. | $t=\frac{r \sqrt{n-2}}{\sqrt{1-r^{2}}}$. <br> with $6-2=4$ degrees of freedom. |
| Step 3 | Specify the level of significance. | $\alpha=5 \%$. |
| Step 4 | State the decision rule. | Critical $t$-values $= \pm 2.776$. <br> Reject the null if the calculated $t$-statistic is less than -2.776 or greater than +2.776 . |
| Step 5 | Calculate the test statistic. | $t=\frac{0.8945 \sqrt{4}}{\sqrt{1-0.8001}}=4.00131$. |
| Step 6 | Make a decision. | Reject the null hypothesis of no correlation. There is sufficient evidence to indicate that the correlation between ROA and CAPEX is different from zero. |

Another interesting feature of simple linear regression is that the test-statistic used to test the fit of the model (i.e., the $F$-distributed test statistic) is related to the calculated $t$-statistic used to test whether the slope coefficient is equal to zero: $t^{2}=F$; therefore, $4.00131^{2}=16.0104$.

What if instead we want to test whether there is a one-to-one relationship between ROA and CAPEX, implying a slope coefficient of 1.0. The hypotheses become $H_{0}: b_{1}$ $=1$ and $H_{a}: b_{1} \neq 1$. The calculated $t$-statistic is as follows:

$$
t=\frac{1.25-1}{0.312398}=0.80026
$$

This calculated test statistic falls within the bounds of the critical values, $\pm 2.776$, so we fail to reject the null hypothesis: There is not sufficient evidence to indicate that the slope is different from 1.0.

What if instead we want to test whether there is a positive slope or positive correlation, as our intuition suggests? In this case, all the steps are the same as in Exhibit 21 and Exhibit 22 except the critical values because the tests are one sided. For a test of a positive slope or positive correlation, the critical value for a 5 percent level of significance is +2.132 . We show the test of hypotheses for a positive slope and a positive correlation in Exhibit 23. Our conclusion is that evidence is sufficient to support both a positive slope and a positive correlation.

## Exhibit 23: One-Sided Tests for the Slope and Correlation

|  |  | Test of the Slope | Test of the Correlation |
| :--- | :--- | :--- | :--- |
| Step 1 | State the hypotheses. | $H_{0}: b_{1} \leq 0$ versus $H_{a}: b_{1}>0$ | $H_{0}: \rho \leq 0$ versus $H_{a}: \rho>0$ |
| Step 2 | Identify the appropriate test statistic. | $t=\frac{\hat{b}_{1}-B_{1}}{s_{\hat{b}_{1}}}$ <br> with $6-2=4$ degrees of freedom. | $t=\frac{r \sqrt{n-2}}{\sqrt{1-r^{2}}} .$ <br> with $6-2=4$ degrees of freedom. |
| Step 3 | Specify the level of significance. | $\alpha=5 \%$. | $\alpha=5 \%$. |
| Step 4 | State the decision rule. | Critical $t$-value $=2.132$. <br> Reject the null if the calculated $t$-statistic is greater than 2.132. | Critical $t$-value $=2.132$. <br> Reject the null if the calculated $t$-statistic is greater than 2.132. |

$t=\frac{1.25-0}{0.312398}=4.00131$
Reject the null hypothesis. Evidence is sufficient to indicate that the slope is greater than zero.
$t=\frac{0.8945 \sqrt{4}}{\sqrt{1-0.8001}}=4.00131$
Do not reject the null hypothesis. There is not sufficient evidence to indicate that the correlation is greater than zero.

## Hypothesis Tests of the Intercept

We may want to test whether the population intercept is a specific value. As a reminder on how to interpret the intercept, consider the simple linear regression with a company's revenue growth rate as the dependent variable ( $Y$ ), and the GDP growth rate of its home country as the independent variable ( $X$ ). The intercept is the company's revenue growth rate if the GDP growth rate is 0 percent.

The equation for the standard error of the intercept, $s_{\hat{b}_{0}}$, is as follows:

$$
s_{\hat{b}_{0}}=S_{e} \sqrt{\frac{1}{n}+\frac{\bar{X}^{2}}{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}}
$$

We can test whether the intercept is different from the hypothesized value, $B_{0}$, by comparing the estimated intercept ( $\widehat{b}_{0}$ ) with the hypothesized intercept and then dividing the difference by the standard error of the intercept:

$$
t_{\text {intercept }}=\frac{\hat{b}_{0}-B_{0}}{s_{\hat{b}_{0}}}=\frac{\hat{b}_{0}-B_{0}}{\sqrt{\frac{1}{n}+\frac{\bar{X}^{2}}{\sum_{i-1}^{n}\left(X_{i}-\bar{X}\right)^{2}}}}
$$

In the ROA regression example, the intercept is 4.875 percent. Suppose we want to test whether the intercept is greater than 3 percent. The one-sided hypothesis test is shown in Exhibit 24. As you can see, we reject the null hypothesis. In other words, evidence is sufficient that if there are no capital expenditures (CAPEX $=0$ ), ROA is greater than 3 percent.

## Exhibit 24: Test of Hypothesis for Intercept for Regression of ROA on CAPEX

| Step 1 | State the hypotheses. | $H_{0}: b_{0} \leq 3 \%$ versus $H_{a}: b_{0}>3 \%$ |
| :--- | :--- | :--- |
| Step 2 | Identify the appropriate test statistic. | $t_{\text {intercept }}=\frac{\hat{b}_{0}-B_{0}}{s_{\hat{b}_{0}}}$ <br> with $6-2=4$ degrees of freedom. |
| Step 3 | Specify the level of significance. | $\alpha=5 \%$. |
| Step 4 | State the decision rule. | Critical $t$-value $=2.132$. <br> Reject the null if the calculated $t$-statistic is greater than 2.132. |
| Step 5 | Calculate the test statistic. | $\begin{aligned} & t_{\text {intercept }}=\frac{4.875-3.0}{3.4596 \times \sqrt{\frac{1}{6}+\frac{6.1^{2}}{122.64}}}=\frac{1.875}{3.4596 \times 0.68562} \\ & =0.7905 \end{aligned}$ |
| Step 6 | Make a decision. | Reject the null hypothesis. There is sufficient evidence to indicate that the intercept is greater than $3 \%$. |

## Hypothesis Tests of Slope When the Independent Variable Is an Indicator Variable

Suppose we want to examine whether a company's quarterly earnings announcements influence its monthly stock returns. In this case, we could use an indicator variable, or dummy variable, that takes on only the values 0 or 1 as the independent variable. Consider the case of a company's monthly stock returns over a 30 -month period. A simple linear regression model for investigating this question would be monthly returns, RET, regressed on the indicator variable, EARN, that takes on a value of 0 if there is no earnings announcement that month and 1 if there is an earnings announcement:

$$
\operatorname{RET}_{i}=b_{0}+b_{1} \operatorname{EARN}_{i}+\varepsilon_{i} .
$$

This regression setup allows us to test whether there are different returns for earnings-announcement months versus non-earnings-announcement months. The observations and regression results are shown graphically in Exhibit 25.

Exhibit 25: Earnings Announcements, Dummy Variable, and Stock Returns
![](https://cdn.mathpix.com/cropped/2025_06_02_e30afa11b175f9d7d3c2g-08.jpg?height=670&width=1118&top_left_y=966&top_left_x=349)

Clearly there are some months in which the returns are different from other months, and these correspond to months in which there was an earnings announcement. We estimate the simple linear regression model and perform hypothesis testing in the same manner as if the independent variable were a continuous variable. In a simple linear regression, the interpretation of the intercept is the predicted value of the dependent variable if the indicator variable is zero. Moreover, the slope when the indicator variable is 1 is the difference in the means if we grouped the observations by the indicator variable. The results of the regression are given in Panel A of Exhibit 26.

Exhibit 26: Regression and Test of Differences Using an Indicator Variable

## A. Regression Estimation Results

|  | Estimated Coefficients | Standard Error of <br> Coefficients | Calculated Test <br> Statistic |
| :--- | :---: | :---: | :---: |
| Intercept | 0.5629 | 0.0560 | 10.0596 |
| EARN | 1.2098 | 0.1158 | 10.4435 |

## B. Test of Differences in Means

|  | RET for EarningsAnnouncement Months | RET for Non-EarningsAnnouncement Months | Difference in Means |
| :--- | :--- | :--- | :--- |
| Mean | 1.7727 | 0.5629 | 1.2098 |
| Variance | 0.1052 | 0.0630 |  |
| Observations | 7 | 23 |  |
| Pooled variance |  |  | 0.07202 |
| Calculated test statistic |  |  | 10.4435 |
|  | Test of Differences in Means <br> Degrees of freedom $=28$. <br> Critical $t$-values $=+2.0484$ ( $5 \%$ significance). |  |  |

We can see the following from Panel A of Exhibit 26:

- The intercept (0.5629) is the mean of the returns for non-earnings-announcement months.
- The slope coefficient (1.2098) is the difference in means of returns between earnings-announcement and non-earnings-announcement months.
- We reject the null hypothesis that the slope coefficient on EARN is equal to zero. We also reject the null hypothesis that the intercept is zero. The reason is that in both cases, the calculated test statistic exceeds the critical $t$-value.

We could also test whether the mean monthly return is the same for both the non-earnings-announcement months and the earnings-announcement months by testing the following:
$H_{0}: \mu_{\text {RETearnings }}=\mu_{\text {RETNon-earnings }}$ and $H_{a}: \mu_{\text {RETearnings }} \neq \mu_{\text {RETNon-earnings }}$
The results of this hypothesis test are gleaned from Panel B of Exhibit 26. As you can see, we reject the null hypothesis that there is no difference in the mean RET for the earnings-announcement and non-earnings-announcements months at the 5 percent level of significance, because the calculated test statistic (10.4435) exceeds the critical value (2.0484).

## Test of Hypotheses: Level of Significance and p-Values

The choice of significance level in hypothesis testing is always a matter of judgment. Analysts often choose the 0.05 level of significance, which indicates a 5 percent chance of rejecting the null hypothesis when, in fact, it is true (a Type I error, or false positive). Of course, decreasing the level of significance from 0.05 to 0.01 decreases the probability of a Type I error, but it also increases the probability of a Type II error-failing to reject the null hypothesis when, in fact, it is false (i.e., a false negative).

The $p$-value is the smallest level of significance at which the null hypothesis can be rejected. The smaller the $p$-value, the smaller the chance of making a Type I error (i.e., rejecting a true null hypothesis), so the greater the likelihood the regression model is valid. For example, if the $p$-value is 0.005 , we reject the null hypothesis that the true parameter is equal to zero at the 0.5 percent significance level ( 99.5 percent
confidence). In most software packages, the $p$-values provided for regression coefficients are for a test of null hypothesis that the true parameter is equal to zero against the alternative that the parameter is not equal to zero.

In our ROA regression example, the calculated $t$-statistic for the test of whether the slope coefficient is zero is 4.00131 . The $p$-value corresponding to this test statistic is 0.016 , which means there is just a 0.16 percent chance of rejecting the null hypotheses when it is true. Comparing this $p$-value with the level of significance of 5 percent (and critical values of $\pm 2.776$ ) leads us to easily reject the null hypothesis of $H_{0}: b_{1}=0$.

How do we determine the $p$-values? Because this is the area in the distribution outside the calculated test statistic, we need to resort to software tools. For the $p$-value corresponding to the $t=4.00131$ from the ROA regression example, we could use the following:

- Excel (1-T.DIST(4.00131,4,TRUE))*2
- R (1-pt(4.00131,4))*2
- Python from scipy.stats import t and $(1-\mathrm{t} . \mathrm{cdf}(4.00131,4)){ }^{*} 2$


## QUESTION SET

The following applies to questions 1-3:
Julie Moon is an energy analyst examining electricity, oil, and natural gas consumption in different regions over different seasons. She ran a simple regression explaining the variation in energy consumption as a function of temperature. The total variation of the dependent variable was 140.58, and the explained variation was 60.16 . She had 60 monthly observations.

1. Calculate the coefficient of determination.

## Solution:

The coefficient of determination is 0.4279 :
$\frac{\text { Explained variation }}{\text { Total variation }}=\frac{60.16}{140.58}=0.4279$.
2. Calculate the $F$-statistic to test the fit of the model.

## Solution:

$F=\frac{60.16 / 1}{(140.58-60.16) /(60-2)}=\frac{60.16}{1.3866}=43.3882$.
3. Calculate the sample standard deviation of monthly energy consumption.

## Solution:

The sample variance of the dependent variable uses the total variation of the dependent variable and divides it by the number of observations less one:

$$
\sum_{i=1}^{n} \frac{\left(Y_{i}-\bar{Y}\right)^{2}}{n-1}=\frac{\text { Total variation }}{n-1}=\frac{140.58}{60-1}=2.3827
$$

The sample standard deviation of the dependent variable is the square root of the variance, or $\sqrt{2.3827}=1.544$.

The following applies to questions 4-6:

An analyst is interested in interpreting the results of and performing tests of hypotheses for the market model estimation that regresses the daily return on ABC stock on the daily return on the fictitious Europe-Asia-Africa (EAA) Equity Index, his proxy for the stock market. He has generated the regression results presented in Exhibit 27.

| Exhibit 27: Hypothesis Testing of Simple Linear Regression Results Selected Results of Estimation of Market Model for ABC Stock |  |
| :--- | :--- |
| Standard error of the estimate ( $\mathrm{s}_{\mathrm{e}}$ ) | 1.26 |
| Standard deviation of ABC stock returns | 0.80 |
| Standard deviation of EAA Equity Index returns | 0.70 |
| Number of observations | 1,200 |
|  | Coefficients |
| Intercept | 0.010 |
| Slope of EAA Equity Index returns | 0.982 |

4. If the critical $t$-values are $\pm 1.96$ (at the 5 percent significance level), is the slope coefficient different from zero?

## Solution:

First, we calculate the variation of the independent variable using the standard deviation of the independent variable:

$$
\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}=\frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}{n-1} \times(n-1) .
$$

So,

$$
\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}=0.70^{2} \times 1,199=587.51
$$

Next, the standard error of the estimated slope coefficient is

$$
s \hat{b}_{1}=\frac{s_{e}}{\sqrt{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}}=\frac{1.26}{\sqrt{587.51}}=0.051983,
$$

and the test statistic is

$$
t=\frac{\hat{b}_{1}-B_{1}}{s_{\hat{b}_{1}}}=\frac{0.982-0}{0.051983}=18.8907 .
$$

The calculated test statistic is outside the bounds of $\pm 1.96$, so we reject the null hypothesis of a slope coefficient equal to zero.
5. If the critical $t$-values are $\pm 1.96$ (at the 5 percent significance level), is the slope coefficient different from 1.0?

## Solution:

The calculated test statistic for the test of whether the slope coefficient is equal to 1.0 is

| $t=\frac{0.982-1}{0.051983}=-0.3463$. <br> The calculated test statistic is within the bounds of $\pm 1.96$, so we fail to reject the null hypothesis of a slope coefficient equal to 1.0 , which is evidence that the true population slope may be 1.0. |  |  |  |
| :--- | :--- | :--- | :--- |
| 6. An economist collected the monthly returns for KDL's portfolio and a diversified stock index. The data collected are shown in Exhibit 28: |  |  |  |
| Exhibit 28: Monthly Returns for KDL |  |  |  |
| Month Portfolio Return (\%) <br> Index Return (\%) |  |  |  |
| 1 | 1.11 |  |  |
| 2 | 72.10 |  |  |
| 3 | 5.12 |  |  |
| 4 | 1.01 |  |  |
| 5 | -1.72 |  |  |
| 6 | 4.06 |  |  |
| The economist calculated the correlation between the two returns and found it to be 0.996 . The regression results with the portfolio return as the dependent variable and the index return as the independent variable are given in Exhibit 29: |  |  |  |
| Exhibit 29: Regression Results |  |  |  |
| Regression Statistics |  |  |  |
| $R^{2}$ | 0.9921 |  |  |
| Standard error | 2.8619 |  |  |
| Observations | 6 |  |  |
| Source | df | Mean Square | $p$-Value |
| Regression | 1 | 4,101.6205 | 0.0000 |
| Residual | 4 | 8.1903 |  |
| Total | 5 |  |  |


|  | Coefficients | Standard Error | $t$-Statistic | $p$-Value |
| :--- | :--- | :--- | :--- | :--- |
| Intercept | 2.2521 | 1.2739 | 1.7679 | 0.1518 |
| Index return (\%) | 1.0690 | 0.0478 | 22.3784 | 0.0000 |

When reviewing the results, Andrea Fusilier suspected that they were unreliable. She found that the returns for Month 2 should have been 7.21 percent and 6.49 percent, instead of the large values shown in the first table. Correcting these values resulted in a revised correlation of 0.824 and the revised regression results in Exhibit 30:

Exhibit 30: Revised Regression Results

| Regression Statistics |  |  |  |  |
| :--- | :--- | :--- | :--- | :--- |
| $R^{2}$ |  | 0.6784 |  |  |
| Standard error |  | 2.0624 |  |  |
| Observations |  | 6 |  |  |
| Source | df | Sum of Squares | Mean Square | $F$ |
| Regression | 1 | 35.8950 | 35.8950 | 8.4391 |
| Residual | 4 | 17.0137 | 4.2534 |  |
| Total | 5 | 52.91 |  |  |
| Standard Error <br> $t$-Statistic <br> $p$-Value |  |  |  |  |
| Intercept | 2.2421 | 0.8635 | 2.5966 | 0.060 |
| Slope | 0.6217 | 0.2143 | 2.9050 | 0.044 |

Explain how the bad data affected the results.

## Solution:

The Month 2 data point is an outlier, lying far away from the other data values. Because this outlier was caused by a data entry error, correcting the outlier improves the validity and reliability of the regression. In this case, revised $R^{2}$ is lower (from 0.9921 to 0.6784). The outliers created the illusion of a better fit from the higher $R^{2}$; the outliers altered the estimate of the slope. The standard error of the estimate is lower when the data error is corrected (from 2.8619 to 2.0624), as a result of the lower mean square error. At a 0.05 level of significance, both models fit well. The difference in the fit is illustrated in Exhibit 31.

Exhibit 31: Fit of the Model with and without Data Errors
A. Before the Data Errors Are Corrected
![](https://cdn.mathpix.com/cropped/2025_06_02_e30afa11b175f9d7d3c2g-14.jpg?height=450&width=809&top_left_y=393&top_left_x=501)
B. After the Data Errors Are Corrected
![](https://cdn.mathpix.com/cropped/2025_06_02_e30afa11b175f9d7d3c2g-14.jpg?height=454&width=809&top_left_y=933&top_left_x=501)

## PREDICTION IN THE SIMPLE LINEAR REGRESSION MODEL

describe the use of analysis of variance (ANOVA) in regression analysis, interpret ANOVA results, and calculate and interpret the standard error of estimate in a simple linear regression
calculate and interpret the predicted value for the dependent variable, and a prediction interval for it, given an estimated linear regression model and a value for the independent variable

## ANOVA and Standard Error of Estimate in Simple Linear Regression

We often represent the sums of squares from a regression model in an analysis of variance (ANOVA) table, as shown in Exhibit 32, which presents the sums of squares, the degrees of freedom, the mean squares, and the $F$-statistic. Notice that the variance of the dependent variable is the ratio of the sum of squares total to $n-1$.

