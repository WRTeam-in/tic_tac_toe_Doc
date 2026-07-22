---
sidebar_position: 21
---

# How to Register for In-App Purchase

This app uses the `flutter_inapp_purchase` package. Every product ID you create below must exactly match an entry in `AdConfig.coinProductIds` (`lib/constants/ad_config.dart`) and the `ShopItem.dummy` catalogue (`lib/data/models/shop_item_model.dart`) — see [Coin Purchase](coin-purchase.md).

Coin packs are **consumable** IAP (can be purchased repeatedly). For the full walkthrough — App Store agreements/banking, Play Console payments profile, licensed testers, and troubleshooting — see the [IAP Setup Guide](https://wrteam-in.github.io/common_app_doc/GeneralSettings/iap/).

## To create an in-app product (Android / Google Play)

1. Open Play Console → **Monetize → Products → In-app products**.
2. Click **Create product**.
3. Enter your product details:
   - **Product ID** — a unique ID for your in-app product.
   - **Title** — a short name (up to 55 characters; keep it to ~25 to display properly everywhere), e.g. "Sleeping potion."
   - **Description** — up to 200 characters, e.g. "Instantly puts creatures to sleep."
   - **Icon** — a unique, accurate image with no text/promotions/branding. Shown on your store listing and during the purchase flow.
     - 32-bit PNG
     - 512×512 px
     - Up to 1 MB
   - **Price** — enter a local price or select a pricing template.
   - **Play Points exclusive** — optionally restrict the product to Google Play Points.
4. Save your changes, then click **Activate** to make the product available.
   - To be purchasable, a product must be active **and** its app must be published.
   - Test accounts can purchase active items in unpublished apps too.

For more info: [Play Console help](https://support.google.com/googleplay/android-developer/answer/1153481?hl=en#zippy=%2Ccreate-a-single-in-app-product).

## iOS

1. Log in to [App Store Connect](https://appstoreconnect.apple.com/) → your app → **Features → In-App Purchases**.
2. Click **+**, select **Consumable** as the type (coin packs are consumable — purchasable repeatedly), and fill in:
   - **Reference Name**
   - **Product ID** — must exactly match the `id` you used in `ShopItem.dummy` / `AdConfig.coinProductIds`.
   - **Pricing**

See Apple's [In-App Purchase guide](https://developer.apple.com/in-app-purchase/) for full details.

:::important
Enable paid app agreements in your Apple Developer account, or in-app purchases won't work:

1. Log in to your Apple Developer account.
2. Go to **Agreements, Tax, and Banking**.
3. Accept the **Paid Applications Agreement**.
4. Complete the banking and tax information.
5. Wait for Apple's approval (can take a few days).
:::

## Testing

Before releasing to production:

1. Create a sandbox tester account in App Store Connect (**Users and Access → Sandbox → Testers**).
2. Sign out of your regular Apple ID on the test device and sign in with the sandbox account when prompted during purchase.
3. Test the complete purchase flow end to end.
4. Verify the coin balance updates correctly after purchase.

## Troubleshooting

- **Purchases aren't working** — verify the Product ID matches exactly across App Store Connect / Play Console, `ShopItem.dummy`, and `AdConfig.coinProductIds`.
- **iOS bundle identifier mismatch** — confirm it matches the one registered in App Store Connect (see [Change Package Name](app-branding/change-package-name.md)).
- **Provisioning profile** — make sure it includes the In-App Purchase capability.
- **Products not loading** — double-check the Paid Applications Agreement (iOS) is signed and approved, or that the Android app has been published to at least internal/closed testing (products don't show up otherwise).
