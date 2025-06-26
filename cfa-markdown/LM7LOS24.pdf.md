intervals (and conduct tests of inference) as long as the sample size is large (generally $n \geq 30$ ).
4. What is wrong with the following statement of the central limit theorem?

Central Limit Theorem. "If the random variables $X_{1}, X_{2}, X_{3}, \ldots, \mathrm{X}_{\mathrm{n}}$ are a random sample of size $n$ from any distribution with finite mean $\mu$ and variance $\sigma^{2}$, then the distribution of $\bar{X}$ will be approximately normal, with a standard deviation of $\sigma / \sqrt{n}$."

## Solution:

The statement makes the following mistakes:

- Given the conditions in the statement, the distribution of $\bar{X}$ will be approximately normal only for large sample sizes.
- The statement omits the important element of the central limit theorem that the distribution of $\bar{X}$ will have mean $\mu$.

5. Peter Biggs wants to know how growth managers performed last year. Biggs assumes that the population cross-sectional standard deviation of growth manager returns is 6 percent and that the returns are independent across managers.
A. How large a random sample does Biggs need if he wants the standard deviation of the sample means to be 1 percent?
B. How large a random sample does Biggs need if he wants the standard deviation of the sample means to be 0.25 percent?

## Solution:

A. The standard deviation or standard error of the sample mean is $\sigma_{\bar{X}}=\sigma /$ $\sqrt{n}$. Substituting in the values for $\sigma_{\bar{X}}$ and $\sigma$, we have $1 \%=6 \% / \sqrt{n}$, or $\sqrt{n}=6$. Squaring this value, we get a random sample of $n=36$.
B. As in Part A, the standard deviation of sample mean is $\sigma_{\bar{X}}=\sigma / \sqrt{n}$. Substituting in the values for $\sigma_{\bar{X}}$ and $\sigma$, we have $0.25 \%=6 \% / \sqrt{n}$, or $\sqrt{n}=24$. Squaring this value, we get a random sample of $n=576$, which is substantially larger than for Part A of this question.

## BOOTSTRAPPING AND EMPIRICAL SAMPLING DISTRIBUTIONS

describe the use of resampling (bootstrap, jackknife) to estimate the sampling distribution of a statistic

We demonstrated how to find the standard error of the sample mean, based on the central limit theorem. We return to the computational tool called resampling, which repeatedly draws samples from the original observed data sample for the statistical inference of population parameters. Bootstrap, one of the most popular resampling methods, uses computer simulation for statistical inference without using an analytical formula such as a $z$-statistic or $t$-statistic.

In bootstrap, we repeatedly draw samples from the original sample, and each resample is of the same size as the original sample. Note that each item drawn is replaced for the next draw (i.e., the identical element is put back into the group so that it can be drawn more than once). Assuming we are looking to find the standard error of sample mean, we take many resamples and then compute the mean of each resample. Note that although some items may appear several times in the resamples, other items may not appear at all.

## Exhibit 5: Bootstrap Resampling

![](https://cdn.mathpix.com/cropped/2025_06_26_e0352d55cf1d6995d622g-2.jpg?height=717&width=1147&top_left_y=688&top_left_x=641)

Subsequently, we construct a sampling distribution with these resamples. The bootstrap sampling distribution (right-hand side of Exhibit 5) will approximate the true sampling distribution. We estimate the standard error of the sample mean using Equation 4. Note that to distinguish the foregoing resampling process from other types of resampling, it is often called model-free resampling or non-parametric resampling.

$$
s_{\bar{X}}=\sqrt{\frac{1}{B-1} \sum_{b=1}^{B}\left(\hat{\theta}_{b}-\bar{\theta}\right)^{2}},
$$

where:

$$
\begin{aligned}
S_{\bar{X}} & =\text { the estimate of the standard error of the sample mean, } \\
B & =\text { the number of resamples drawn from the original sample, } \\
\hat{\theta}_{b} & =\text { the mean of a resample, and } \\
\bar{\theta} & =\text { the mean across all the resample means. }
\end{aligned}
$$

Bootstrap is one of the most powerful and widely used tools for statistical inference. As we have explained, it can be used to estimate the standard error of a sample mean. Similarly, bootstrap can be used to find the standard error or construct confidence intervals for the statistic of other population parameters, such as the median, which does not apply to the previously discussed methodologies. Compared with conventional statistical methods, bootstrap does not rely on an analytical formula to estimate the distribution of the estimators. It is a simple but powerful method for any complicated estimators and particularly useful when no analytical formula is available.

In addition, bootstrap has potential advantages in accuracy. Given these advantages, bootstrap can be applied widely in finance, such as for historical simulations in asset allocation or in gauging an investment strategy's performance against a benchmark.

## EXAMPLE 4

## Bootstrap Resampling Illustration

Exhibit 6 displays a set of 12 monthly returns of a rarely traded stock, shown in Column A. Our aim is to calculate the standard error of the sample mean. Using the bootstrap resampling method, a series of bootstrap samples, labelled as "resamples" (with replacement) are drawn from the sample of 12 returns. Notice how some of the returns from data sample in Column A feature more than once in some of the resamples (e.g., 0.055 features twice in Resample 1).

Exhibit 6: Rarely Traded Stock, 12 Monthly Returns

| Column A | Resample 1 | Resample 2 | Resample 3 |  | Resample 1,000 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| -0.096 | 0.055 | -0.096 | -0.033 | ... | -0.072 |
| -0.132 | -0.033 | 0.055 | -0.132 | ... | 0.255 |
| -0.191 | 0.255 | 0.055 | -0.157 | ... | 0.055 |
| -0.096 | -0.033 | -0.157 | 0.255 | ... | 0.296 |
| 0.055 | 0.255 | -0.096 | -0.132 | ... | 0.055 |
| -0.053 | -0.157 | -0.053 | -0.191 | ... | -0.096 |
| -0.033 | -0.053 | -0.096 | 0.055 | ... | 0.296 |
| 0.296 | -0.191 | -0.132 | 0.255 | ... | -0.132 |
| 0.055 | -0.132 | -0.132 | 0.296 | ... | 0.055 |
| -0.072 | -0.096 | 0.055 | -0.096 | ... | -0.096 |
| 0.255 | 0.055 | -0.072 | 0.055 | ... | -0.191 |
| -0.157 | -0.157 | -0.053 | -0.157 | ... | 0.055 |
| Sample mean | -0.019 | -0.060 | 0.001 | ... | 0.040 |

Drawing 1,000 such samples, we obtain 1,000 sample means. The mean across all resample means is -0.01367 . The sum of squares of the differences between each sample mean and the mean across all resample means $\left(\sum_{b=1}^{B}\left(\hat{\theta}_{b}-\bar{\theta}\right)^{2}\right)$ is 1.94143 . Using Equation 4, we calculate an estimate of the standard error of the sample mean:

$$
s_{\bar{X}}=\sqrt{\frac{1}{B-1} \sum_{b=1}^{B}\left(\hat{\theta}_{b}-\bar{\theta}\right)^{2}}=\sqrt{\frac{1}{999} \times 1.94143}=0.04408 .
$$

Jackknife is another resampling technique for statistical inference of population parameters. Unlike bootstrap, which repeatedly draws samples with replacement, jackknife samples are selected by taking the original observed data sample and leaving out one observation at a time from the set (and not replacing it). Jackknife method is often used to reduce the bias of an estimator, and other applications include finding the standard error and confidence interval of an estimator. According to its computation procedure, we can conclude that jackknife produces similar results for every
run, whereas bootstrap usually gives different results because bootstrap resamples are randomly drawn. For a sample of size $n$, jackknife usually requires $n$ repetitions, whereas with bootstrap, we are left to determine how many repetitions are appropriate.

## QUESTION SET

![](https://cdn.mathpix.com/cropped/2025_06_26_e0352d55cf1d6995d622g-4.jpg?height=112&width=107&top_left_y=405&top_left_x=1708)

1. An analyst in a real estate investment company is researching the housing market of the Greater Boston area. From a sample of collected house sale price data in the past year, she estimates the median house price of the area. To find the standard error of the estimated median, she is considering two options:

Option 1: The standard error of the sample median can be given by $\frac{s}{\sqrt{n}}$, where $s$ denotes the sample standard deviation and $n$ denotes the sample size.

Option 2: Apply the bootstrap method to construct the sampling distribution of the sample median, and then compute the standard error using Equation 7.

Which of the following statements is accurate?
A. Option 1 is suitable to find the standard error of the sample median.
B. Option 2 is suitable to find the standard error of the sample median.
C. Both options are suitable to find the standard error of the sample median.

## Solution:

B is correct. Option 1 is valid for estimating the standard error of the sample mean but not for that of the sample median, which is not based on the given formula. Thus, both A and C are incorrect. The bootstrap method is a simple way to find the standard error of an estimator even if no analytical formula is available or it is too complicated.
Having covered many of the fundamental concepts of sampling and estimation, we now focus on sampling issues of special concern to analysts. The quality of inferences depends on the quality of the data as well as on the quality of the sampling plan used. Financial data pose special problems, and sampling plans frequently reflect one or more biases. The next section examines these issues.
2. Otema Chi has a spreadsheet with 108 monthly returns for shares in Marunou Corporation. He writes a software program that uses bootstrap resampling to create 200 resamples of this Marunou data by sampling with replacement. Each resample has 108 data points. Chi's program calculates the mean of each of the 200 resamples, and then it calculates that the mean of these 200 resample means is 0.0261 . The program subtracts 0.0261 from each of the 200 resample means, squares each of these 200 differences, and adds the squared differences together. The result is 0.835 . The program then calculates an estimate of the standard error of the sample mean.

The estimated standard error of the sample mean is closest to:
A. 0.0115
B. 0.0648
C. 0.0883

Solution:
B is correct. The estimate of the standard error of the sample mean with bootstrap resampling is calculated as follows:
$s_{\bar{X}}=\sqrt{\frac{1}{B-1} \sum_{b=1}^{B}\left(\hat{\theta}_{b}-\bar{\theta}\right)^{2}}=\sqrt{\frac{1}{200-1} \sum_{b=1}^{200}\left(\hat{\theta}_{b}-0.0261\right)^{2}}=\sqrt{0.004196}$. $s_{\bar{X}}=0.0648$

