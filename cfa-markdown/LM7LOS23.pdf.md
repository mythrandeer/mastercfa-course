4. Perkiomen Kinzua, a seasoned auditor, is auditing last year's transactions for Conemaugh Corporation. Unfortunately, Conemaugh had a very large number of transactions, and Kinzua is under a time constraint to finish the audit. He decides to audit only the small subset of the transaction population that is of interest and to use sampling to create that subset.

The most appropriate sampling method for Kinzua to use is:
A. judgmental sampling.
B. systematic sampling.
C. convenience sampling.

## Solution:

A is correct. With judgmental sampling, Kinzua will use his knowledge and professional judgment as a seasoned auditor to select transactions of interest from the population. This approach will allow Kinzua to create a sample that is representative of the population and that will provide sufficient audit coverage. Judgmental sampling is useful in cases that have a time constraint or in which the specialty of researchers is critical to select a more representative sample than by using other probability or non-probability sampling methods. Judgment sampling, however, entails the risk that Kinzua is biased in his selections, leading to skewed results that are not representative of the whole population.

## CENTRAL LIMIT THEOREM AND INFERENCE

explain the central limit theorem and its importance for the distribution and standard error of the sample mean

Earlier we presented a wireless equipment analyst who decided to sample in order to estimate mean planned capital expenditures by the customers of wireless equipment vendors. Supposing that the sample is representative of the underlying population, how can the analyst assess the sampling error in estimating the population mean?

The sample mean is itself a random variable with a probability distribution called the statistic's sampling distribution. To estimate how closely the sample mean can be expected to match the underlying population mean, the analyst needs to understand the sampling distribution of the mean. The central limit theorem helps us understand the sampling distribution of the mean in many of the estimation problems we face.

## The Central Limit Theorem

To explain the central limit theorem, we will revisit the daily returns of the fictitious Euro-Asia-Africa Equity Index shown earlier. The dataset (the population) consists of daily returns of the index over a five-year period. The 1,258 return observations have a population mean of 0.035 percent.

We conduct four different sets of random sampling from the population. We first draw a random sample of 10 daily returns and obtain a sample mean. We repeat this exercise 99 more times, drawing a total of 100 samples of 10 daily returns. We plot the sample mean results in a histogram, as shown in the top left panel of Exhibit 4. We then repeat the process with a larger sample size of 50 daily returns. We draw 100
samples of 50 daily returns and plot the results (the mean returns) in the histogram shown in the top-right panel of Exhibit 4. We then repeat the process for sample sizes of 100 and 300 daily returns, respectively, again drawing 100 samples in each case. These results appear in the bottom-left and bottom-right panels of Exhibit 4. Looking at all four panels together, we observe that the larger the sample size, the more closely the histogram follows the shape of normal distribution.

## Exhibit 4: Sampling Distribution with Increasing Sample Size

![](https://cdn.mathpix.com/cropped/2025_06_26_eace8db3799170784892g-2.jpg?height=1191&width=1161&top_left_y=657&top_left_x=634)

The results of this exercise show that as we increase the size of a random sample, the distribution of the sample means tends towards a normal distribution and the sampling error of the sample mean is reduced. This is a significant outcome and brings us to the central limit theorem concept, one of the most practically useful theorems in probability theory. It has important implications for how we construct confidence intervals and test hypotheses. Formally, the central limit theorem is stated as follows:

- Central Limit Theorem. Given a population described by any probability distribution having mean $\mu$ and finite variance $\sigma^{2}$, the sampling distribution of the sample mean $\bar{X}$ computed from random samples of size $n$ from this population will be approximately normal with mean $\mu$ (the population mean) and variance $\sigma^{2} / n$ (the population variance divided by $n$ ) when the sample size $n$ is large.

Consider what the expression $\sigma^{2} / n$ signifies. Variance ( $\sigma^{2}$ ) stays the same, but as $n$ increases, the size of the fraction decreases. This suggests that it becomes progressively less common to obtain a sample mean that is far from the true population mean with progressively larger sample sizes.

The central limit theorem allows us to make quite precise probability statements about the population mean by using the sample mean, regardless of the population distribution (so long as it has finite variance), because the sample mean follows an approximate normal distribution for large-size samples. The obvious question is, "When is a sample's size large enough that we can assume the sample mean is normally distributed?" In general, when sample size $n$ is greater than or equal to 30 , we can assume that the sample mean is approximately normally distributed. When the underlying population is very non-normal, a sample size well in excess of 30 may be required for the normal distribution to be a good description of the sampling distribution of the mean.

## Standard Error of the Sample Mean

The central limit theorem states that the variance of the distribution of the sample mean is $\sigma^{2} / n$. The positive square root of variance is standard deviation. The standard deviation of a sample statistic is known as the standard error of the statistic. The standard error of the sample mean is an important quantity in applying the central limit theorem in practice.

- Definition of the Standard Error of the Sample Mean. For sample mean $\bar{X}$ calculated from a sample generated by a population with standard deviation $\sigma$, the standard error of the sample mean is given by one of two expressions:

$$
\sigma_{\bar{X}}=\frac{\sigma}{\sqrt{n}},
$$

when we know $\sigma$, the population standard deviation, or by

$$
s_{\bar{X}}=\frac{s}{\sqrt{n}},
$$

when we do not know the population standard deviation and need to use the sample standard deviation, $s$, to estimate it.

In practice, we almost always need to use Equation 2. The estimate of $s$ is given by the square root of the sample variance, $s^{2}$, calculated as follows:

$$
s^{2}=\frac{\sum_{i=1}^{n}\left(X_{i}-\bar{X}\right)^{2}}{n-1} .
$$

Note that although the standard error is the standard deviation of the sampling distribution of the parameter, "standard deviation" in general and "standard error" are two distinct concepts, and the terms are not interchangeable.

Simply put, standard deviation measures the dispersion of the data from the mean, whereas standard error measures how much inaccuracy of a population parameter estimate comes from sampling. The contrast between standard deviation and standard error reflects the distinction between data description and inference. If we want to draw conclusions about how spread out the data are, standard deviation is the statistic to use. If we want to find out how precise the estimate of a population parameter from sampled data is relative to its true value, standard error is the statistic to use.

In another learning module we will see how the sample mean and its standard error are used in hypothesis testing to make probability statements about the population mean. To summarize, the central limit theorem tells us that when we sample from any distribution, the distribution of the sample mean will have the following properties as long as our sample size is large:

- The distribution of the sample mean $\bar{X}$ will be approximately normal.
- The mean of the distribution of $\bar{X}$ will be equal to the mean of the population from which the samples are drawn.
- The variance of the distribution of $\bar{X}$ will be equal to the variance of the population divided by the sample size.


## QUESTION SET

A research analyst makes two statements about repeated random sampling:

Statement 1 When repeatedly drawing large samples from datasets, the sample means are approximately normally distributed.

Statement 2 The underlying population from which samples are drawn must be normally distributed in order for the sample mean to be normally distributed.

1. Which of the following best describes the validity of the analyst's statements?
A. Statement 1 is false; Statement 2 is true.
B. Both statements are true.
C. Statement 1 is true; Statement 2 is false.

Solution:
C is correct. According to the central limit theorem, Statement 1 is true. Statement 2 is false because the underlying population does not need to be normally distributed in order for the sample mean to be normally distributed.
2. Although he knows security returns are not independent, a colleague makes the claim that because of the central limit theorem, if we diversify across a large number of investments, the portfolio standard deviation will eventually approach zero as $n$ becomes large. Is he correct?

## Solution:

No. First the conclusion on the limit of zero is wrong; second, the support cited for drawing the conclusion (i.e., the central limit theorem) is not relevant in this context.
3. Why is the central limit theorem important?

## Solution:

In many instances, the distribution that describes the underlying population is not normal or the distribution is not known. The central limit theorem states that if the sample size is large, regardless of the shape of the underlying population, the distribution of the sample mean is approximately normal. Therefore, even in these instances, we can still construct confidence
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

