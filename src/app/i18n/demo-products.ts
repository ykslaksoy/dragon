/**
 * Compatibility shim — hunt types & filters live in `@/lib/hunt`.
 * TR hunt uses live/catalog marketplace records; non-TR remains demo.
 */
export {
  DEMO_PRODUCTS,
  HUNT_RESULT_LIMIT,
  filterAndSortProducts,
  isLowRiskPath,
  riskBandLabel,
  TR_LIVE_PRODUCTS,
} from "@/lib/hunt";
export type {
  DemoProduct,
  HuntProduct,
  ProductPath,
  RiskMode,
  SortMode,
} from "@/lib/hunt";
