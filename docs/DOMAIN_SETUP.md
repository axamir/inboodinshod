# اتصال دامنهٔ inboodinshod.ir

وضعیت فعلی: دامنه هنوز رکورد DNS فعال ندارد. سایت موقتاً روی GitHub Pages منتشر شده است.

## رکوردهای موردنیاز در پنل دامنه

برای دامنهٔ اصلی، چهار رکورد `A` با نام `@` بسازید:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

برای `www` این رکورد را بسازید:

```text
Type: CNAME
Name: www
Value: axamir.github.io
```

رکوردهای A یا CNAME متضاد و wildcard حذف شوند.

## پس از انتشار DNS

1. پاسخ DNS بررسی شود.
2. Custom domain ریپو روی `inboodinshod.ir` تنظیم شود.
3. HTTPS پس از صدور گواهی فعال شود.
4. سایت با مسیر ریشهٔ دامنه دوباره build شود.
5. ایمیل `contact@inboodinshod.ir` در صورت ساخت، جایگزین Gmail فعلی شود.

مرجع رسمی: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

