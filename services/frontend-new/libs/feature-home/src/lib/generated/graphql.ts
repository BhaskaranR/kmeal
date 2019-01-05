/** ordering options when selecting data from "geography_columns" */
export interface GeographyColumnsOrderBy {
  coord_dimension?: OrderBy | null;

  f_geography_column?: OrderBy | null;

  f_table_catalog?: OrderBy | null;

  f_table_name?: OrderBy | null;

  f_table_schema?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "geography_columns". All fields are combined with a logical 'AND'. */
export interface GeographyColumnsBoolExp {
  _and?: (GeographyColumnsBoolExp | null)[] | null;

  _not?: GeographyColumnsBoolExp | null;

  _or?: (GeographyColumnsBoolExp | null)[] | null;

  coord_dimension?: IntegerComparisonExp | null;

  f_geography_column?: NameComparisonExp | null;

  f_table_catalog?: NameComparisonExp | null;

  f_table_name?: NameComparisonExp | null;

  f_table_schema?: NameComparisonExp | null;

  srid?: IntegerComparisonExp | null;

  type?: TextComparisonExp | null;
}
/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export interface IntegerComparisonExp {
  _eq?: number | null;

  _gt?: number | null;

  _gte?: number | null;

  _in?: (number | null)[] | null;

  _is_null?: boolean | null;

  _lt?: number | null;

  _lte?: number | null;

  _neq?: number | null;

  _nin?: (number | null)[] | null;
}
/** expression to compare columns of type name. All fields are combined with logical 'AND'. */
export interface NameComparisonExp {
  _eq?: Name | null;

  _gt?: Name | null;

  _gte?: Name | null;

  _in?: (Name | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Name | null;

  _lte?: Name | null;

  _neq?: Name | null;

  _nin?: (Name | null)[] | null;
}
/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export interface TextComparisonExp {
  _eq?: string | null;

  _gt?: string | null;

  _gte?: string | null;

  _ilike?: string | null;

  _in?: (string | null)[] | null;

  _is_null?: boolean | null;

  _like?: string | null;

  _lt?: string | null;

  _lte?: string | null;

  _neq?: string | null;

  _nilike?: string | null;

  _nin?: (string | null)[] | null;

  _nlike?: string | null;

  _nsimilar?: string | null;

  _similar?: string | null;
}
/** ordering options when selecting data from "geometry_columns" */
export interface GeometryColumnsOrderBy {
  coord_dimension?: OrderBy | null;

  f_geometry_column?: OrderBy | null;

  f_table_catalog?: OrderBy | null;

  f_table_name?: OrderBy | null;

  f_table_schema?: OrderBy | null;

  srid?: OrderBy | null;

  type?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "geometry_columns". All fields are combined with a logical 'AND'. */
export interface GeometryColumnsBoolExp {
  _and?: (GeometryColumnsBoolExp | null)[] | null;

  _not?: GeometryColumnsBoolExp | null;

  _or?: (GeometryColumnsBoolExp | null)[] | null;

  coord_dimension?: IntegerComparisonExp | null;

  f_geometry_column?: NameComparisonExp | null;

  f_table_catalog?: VarcharComparisonExp | null;

  f_table_name?: NameComparisonExp | null;

  f_table_schema?: NameComparisonExp | null;

  srid?: IntegerComparisonExp | null;

  type?: VarcharComparisonExp | null;
}
/** expression to compare columns of type varchar. All fields are combined with logical 'AND'. */
export interface VarcharComparisonExp {
  _eq?: string | null;

  _gt?: string | null;

  _gte?: string | null;

  _ilike?: string | null;

  _in?: (string | null)[] | null;

  _is_null?: boolean | null;

  _like?: string | null;

  _lt?: string | null;

  _lte?: string | null;

  _neq?: string | null;

  _nilike?: string | null;

  _nin?: (string | null)[] | null;

  _nlike?: string | null;

  _nsimilar?: string | null;

  _similar?: string | null;
}

export interface GetNearByInput {
  lat: number;

  long: number;

  radius: number;
}
/** ordering options when selecting data from "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidOrderBy {
  block_number?: OrderBy | null;

  txid?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal._block_number_txid". All fields are combined with a logical 'AND'. */
export interface KmealBlockNumberTxidBoolExp {
  _and?: (KmealBlockNumberTxidBoolExp | null)[] | null;

  _not?: KmealBlockNumberTxidBoolExp | null;

  _or?: (KmealBlockNumberTxidBoolExp | null)[] | null;

  block_number?: IntegerComparisonExp | null;

  txid?: BigintComparisonExp | null;
}
/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export interface BigintComparisonExp {
  _eq?: Bigint | null;

  _gt?: Bigint | null;

  _gte?: Bigint | null;

  _in?: (Bigint | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Bigint | null;

  _lte?: Bigint | null;

  _neq?: Bigint | null;

  _nin?: (Bigint | null)[] | null;
}
/** ordering options when selecting data from "kmeal._index_state" */
export interface KmealIndexStateOrderBy {
  block_hash?: OrderBy | null;

  block_number?: OrderBy | null;

  id?: OrderBy | null;

  is_replay?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal._index_state". All fields are combined with a logical 'AND'. */
export interface KmealIndexStateBoolExp {
  _and?: (KmealIndexStateBoolExp | null)[] | null;

  _not?: KmealIndexStateBoolExp | null;

  _or?: (KmealIndexStateBoolExp | null)[] | null;

  block_hash?: TextComparisonExp | null;

  block_number?: IntegerComparisonExp | null;

  id?: IntegerComparisonExp | null;

  is_replay?: BooleanComparisonExp | null;
}
/** expression to compare columns of type boolean. All fields are combined with logical 'AND'. */
export interface BooleanComparisonExp {
  _eq?: boolean | null;

  _gt?: boolean | null;

  _gte?: boolean | null;

  _in?: (boolean | null)[] | null;

  _is_null?: boolean | null;

  _lt?: boolean | null;

  _lte?: boolean | null;

  _neq?: boolean | null;

  _nin?: (boolean | null)[] | null;
}
/** ordering options when selecting data from "kmeal.account" */
export interface KmealAccountOrderBy {
  _dmx_created_at?: OrderBy | null;

  account_type?: OrderBy | null;

  balance?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  owner?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal.account". All fields are combined with a logical 'AND'. */
export interface KmealAccountBoolExp {
  _and?: (KmealAccountBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealAccountBoolExp | null;

  _or?: (KmealAccountBoolExp | null)[] | null;

  account_type?: BpcharComparisonExp | null;

  balance?: NumericComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  dpordersBybuyer?: KmealDporderBoolExp | null;

  ordersBybuyer?: KmealOrderBoolExp | null;

  owner?: BpcharComparisonExp | null;

  restaurantsByowner?: KmealRestaurantBoolExp | null;
}
/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export interface TimestampComparisonExp {
  _eq?: Timestamp | null;

  _gt?: Timestamp | null;

  _gte?: Timestamp | null;

  _in?: (Timestamp | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Timestamp | null;

  _lte?: Timestamp | null;

  _neq?: Timestamp | null;

  _nin?: (Timestamp | null)[] | null;
}
/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export interface BpcharComparisonExp {
  _eq?: Bpchar | null;

  _gt?: Bpchar | null;

  _gte?: Bpchar | null;

  _in?: (Bpchar | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Bpchar | null;

  _lte?: Bpchar | null;

  _neq?: Bpchar | null;

  _nin?: (Bpchar | null)[] | null;
}
/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export interface NumericComparisonExp {
  _eq?: Numeric | null;

  _gt?: Numeric | null;

  _gte?: Numeric | null;

  _in?: (Numeric | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Numeric | null;

  _lte?: Numeric | null;

  _neq?: Numeric | null;

  _nin?: (Numeric | null)[] | null;
}
/** Boolean expression to filter rows from the table "kmeal.dporder". All fields are combined with a logical 'AND'. */
export interface KmealDporderBoolExp {
  _and?: (KmealDporderBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealDporderBoolExp | null;

  _or?: (KmealDporderBoolExp | null)[] | null;

  accountBybuyer?: KmealAccountBoolExp | null;

  bid_price?: TextComparisonExp | null;

  buyer?: TextComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  dporder_id?: IntegerComparisonExp | null;

  instructions?: TextComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  order_id?: IntegerComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.listing". All fields are combined with a logical 'AND'. */
export interface KmealListingBoolExp {
  _and?: (KmealListingBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealListingBoolExp | null;

  _or?: (KmealListingBoolExp | null)[] | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  dplistingsBylistingId?: KmealDplistingBoolExp | null;

  dpordersBylistingId?: KmealDporderBoolExp | null;

  isactive?: BooleanComparisonExp | null;

  list_price?: NumericComparisonExp | null;

  list_type?: BpcharComparisonExp | null;

  listingItemSidessBylistingId?: KmealListingItemSidesBoolExp | null;

  listingItemssBylistingId?: KmealListingItemsBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  orderDetailsBylistingId?: KmealOrderDetailBoolExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.dplisting". All fields are combined with a logical 'AND'. */
export interface KmealDplistingBoolExp {
  _and?: (KmealDplistingBoolExp | null)[] | null;

  _not?: KmealDplistingBoolExp | null;

  _or?: (KmealDplistingBoolExp | null)[] | null;

  duration?: IntegerComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  min_price?: NumericComparisonExp | null;

  quantity?: IntegerComparisonExp | null;

  sliding_rate?: IntegerComparisonExp | null;

  start?: IntegerComparisonExp | null;

  status?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.listing_item_sides". All fields are combined with a logical 'AND'. */
export interface KmealListingItemSidesBoolExp {
  _and?: (KmealListingItemSidesBoolExp | null)[] | null;

  _not?: KmealListingItemSidesBoolExp | null;

  _or?: (KmealListingItemSidesBoolExp | null)[] | null;

  itemByitemId?: KmealItemBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  list_price?: NumericComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.item". All fields are combined with a logical 'AND'. */
export interface KmealItemBoolExp {
  _and?: (KmealItemBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealItemBoolExp | null;

  _or?: (KmealItemBoolExp | null)[] | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  description?: TextComparisonExp | null;

  groupsByitemId?: KmealGroupBoolExp | null;

  itemTypessByitemId?: KmealItemTypesBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  item_name?: VarcharComparisonExp | null;

  listingItemSidessByitemId?: KmealListingItemSidesBoolExp | null;

  listingItemssByitemId?: KmealListingItemsBoolExp | null;

  photo?: VarcharComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.group". All fields are combined with a logical 'AND'. */
export interface KmealGroupBoolExp {
  _and?: (KmealGroupBoolExp | null)[] | null;

  _not?: KmealGroupBoolExp | null;

  _or?: (KmealGroupBoolExp | null)[] | null;

  group_id?: IntegerComparisonExp | null;

  itemByitemId?: KmealItemBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  restaurantGroupBygroupId?: KmealRestaurantGroupBoolExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant_group". All fields are combined with a logical 'AND'. */
export interface KmealRestaurantGroupBoolExp {
  _and?: (KmealRestaurantGroupBoolExp | null)[] | null;

  _not?: KmealRestaurantGroupBoolExp | null;

  _or?: (KmealRestaurantGroupBoolExp | null)[] | null;

  group_id?: IntegerComparisonExp | null;

  group_name?: TextComparisonExp | null;

  groupsBygroupId?: KmealGroupBoolExp | null;

  menu_book?: VarcharComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant". All fields are combined with a logical 'AND'. */
export interface KmealRestaurantBoolExp {
  _and?: (KmealRestaurantBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealRestaurantBoolExp | null;

  _or?: (KmealRestaurantBoolExp | null)[] | null;

  accountByowner?: KmealAccountBoolExp | null;

  address?: TextComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: VarcharComparisonExp | null;

  created_trx?: VarcharComparisonExp | null;

  description?: TextComparisonExp | null;

  dpordersByrestaurantId?: KmealDporderBoolExp | null;

  isactive?: BooleanComparisonExp | null;

  itemsByrestaurantId?: KmealItemBoolExp | null;

  latitude?: Float8ComparisonExp | null;

  listingsByrestaurantId?: KmealListingBoolExp | null;

  location?: GeographyComparisonExp | null;

  logo?: TextComparisonExp | null;

  longitude?: Float8ComparisonExp | null;

  name?: TextComparisonExp | null;

  ordersByrestaurantId?: KmealOrderBoolExp | null;

  owner?: BpcharComparisonExp | null;

  phone?: VarcharComparisonExp | null;

  rating?: IntegerComparisonExp | null;

  restaurantCategoriessByrestaurantId?: KmealRestaurantCategoriesBoolExp | null;

  restaurantGroupsByrestaurantId?: KmealRestaurantGroupBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;

  timeofoperation?: VarcharComparisonExp | null;

  yelp_id?: VarcharComparisonExp | null;
}
/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export interface Float8ComparisonExp {
  _eq?: Float8 | null;

  _gt?: Float8 | null;

  _gte?: Float8 | null;

  _in?: (Float8 | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Float8 | null;

  _lte?: Float8 | null;

  _neq?: Float8 | null;

  _nin?: (Float8 | null)[] | null;
}
/** expression to compare columns of type geography. All fields are combined with logical 'AND'. */
export interface GeographyComparisonExp {
  _eq?: Geography | null;

  _gt?: Geography | null;

  _gte?: Geography | null;

  _in?: (Geography | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Geography | null;

  _lte?: Geography | null;

  _neq?: Geography | null;

  _nin?: (Geography | null)[] | null;
}
/** Boolean expression to filter rows from the table "kmeal.order". All fields are combined with a logical 'AND'. */
export interface KmealOrderBoolExp {
  _and?: (KmealOrderBoolExp | null)[] | null;

  _dmx_created_at?: TimestampComparisonExp | null;

  _not?: KmealOrderBoolExp | null;

  _or?: (KmealOrderBoolExp | null)[] | null;

  accountBybuyer?: KmealAccountBoolExp | null;

  buyer?: BpcharComparisonExp | null;

  created_at?: TimestampComparisonExp | null;

  created_block?: BigintComparisonExp | null;

  created_eosacc?: TextComparisonExp | null;

  created_trx?: TextComparisonExp | null;

  instructions?: TextComparisonExp | null;

  orderDetailsByorderId?: KmealOrderDetailBoolExp | null;

  orderStatussByorderId?: KmealOrderStatusBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  paymentsByorderId?: KmealPaymentBoolExp | null;

  price?: TextComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.order_detail". All fields are combined with a logical 'AND'. */
export interface KmealOrderDetailBoolExp {
  _and?: (KmealOrderDetailBoolExp | null)[] | null;

  _not?: KmealOrderDetailBoolExp | null;

  _or?: (KmealOrderDetailBoolExp | null)[] | null;

  instructions?: TextComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;

  listing_type?: BpcharComparisonExp | null;

  orderByorderId?: KmealOrderBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  ordered_price?: IntegerComparisonExp | null;

  qty?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.order_status". All fields are combined with a logical 'AND'. */
export interface KmealOrderStatusBoolExp {
  _and?: (KmealOrderStatusBoolExp | null)[] | null;

  _not?: KmealOrderStatusBoolExp | null;

  _or?: (KmealOrderStatusBoolExp | null)[] | null;

  created_at?: TimestampComparisonExp | null;

  orderByorderId?: KmealOrderBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  order_status?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.payment". All fields are combined with a logical 'AND'. */
export interface KmealPaymentBoolExp {
  _and?: (KmealPaymentBoolExp | null)[] | null;

  _not?: KmealPaymentBoolExp | null;

  _or?: (KmealPaymentBoolExp | null)[] | null;

  orderByorderId?: KmealOrderBoolExp | null;

  order_id?: IntegerComparisonExp | null;

  payment_id?: IntegerComparisonExp | null;

  payment_status?: BpcharComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant_categories".All fields are combined with a logical 'AND'. */
export interface KmealRestaurantCategoriesBoolExp {
  _and?: (KmealRestaurantCategoriesBoolExp | null)[] | null;

  _not?: KmealRestaurantCategoriesBoolExp | null;

  _or?: (KmealRestaurantCategoriesBoolExp | null)[] | null;

  category?: TextComparisonExp | null;

  restaurantByrestaurantId?: KmealRestaurantBoolExp | null;

  restaurant_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.item_types". All fields are combined with a logical 'AND'. */
export interface KmealItemTypesBoolExp {
  _and?: (KmealItemTypesBoolExp | null)[] | null;

  _not?: KmealItemTypesBoolExp | null;

  _or?: (KmealItemTypesBoolExp | null)[] | null;

  itemByitemId?: KmealItemBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  item_type?: TextComparisonExp | null;
}
/** Boolean expression to filter rows from the table "kmeal.listing_items". All fields are combined with a logical 'AND'. */
export interface KmealListingItemsBoolExp {
  _and?: (KmealListingItemsBoolExp | null)[] | null;

  _not?: KmealListingItemsBoolExp | null;

  _or?: (KmealListingItemsBoolExp | null)[] | null;

  itemByitemId?: KmealItemBoolExp | null;

  item_id?: IntegerComparisonExp | null;

  listingBylistingId?: KmealListingBoolExp | null;

  listing_id?: IntegerComparisonExp | null;
}
/** ordering options when selecting data from "kmeal.dporder" */
export interface KmealDporderOrderBy {
  _dmx_created_at?: OrderBy | null;

  accountBybuyer?: KmealAccountOrderBy | null;

  bid_price?: OrderBy | null;

  buyer?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  dporder_id?: OrderBy | null;

  instructions?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;

  order_id?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.listing" */
export interface KmealListingOrderBy {
  _dmx_created_at?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  isactive?: OrderBy | null;

  list_price?: OrderBy | null;

  list_type?: OrderBy | null;

  listing_id?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.restaurant" */
export interface KmealRestaurantOrderBy {
  _dmx_created_at?: OrderBy | null;

  accountByowner?: KmealAccountOrderBy | null;

  address?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  description?: OrderBy | null;

  isactive?: OrderBy | null;

  latitude?: OrderBy | null;

  location?: OrderBy | null;

  logo?: OrderBy | null;

  longitude?: OrderBy | null;

  name?: OrderBy | null;

  owner?: OrderBy | null;

  phone?: OrderBy | null;

  rating?: OrderBy | null;

  restaurant_id?: OrderBy | null;

  timeofoperation?: OrderBy | null;

  yelp_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.dplisting" */
export interface KmealDplistingOrderBy {
  duration?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;

  min_price?: OrderBy | null;

  quantity?: OrderBy | null;

  sliding_rate?: OrderBy | null;

  start?: OrderBy | null;

  status?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.listing_item_sides" */
export interface KmealListingItemSidesOrderBy {
  itemByitemId?: KmealItemOrderBy | null;

  item_id?: OrderBy | null;

  list_price?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.item" */
export interface KmealItemOrderBy {
  _dmx_created_at?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  description?: OrderBy | null;

  item_id?: OrderBy | null;

  item_name?: OrderBy | null;

  photo?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.group" */
export interface KmealGroupOrderBy {
  group_id?: OrderBy | null;

  itemByitemId?: KmealItemOrderBy | null;

  item_id?: OrderBy | null;

  restaurantGroupBygroupId?: KmealRestaurantGroupOrderBy | null;
}
/** ordering options when selecting data from "kmeal.restaurant_group" */
export interface KmealRestaurantGroupOrderBy {
  group_id?: OrderBy | null;

  group_name?: OrderBy | null;

  menu_book?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.order" */
export interface KmealOrderOrderBy {
  _dmx_created_at?: OrderBy | null;

  accountBybuyer?: KmealAccountOrderBy | null;

  buyer?: OrderBy | null;

  created_at?: OrderBy | null;

  created_block?: OrderBy | null;

  created_eosacc?: OrderBy | null;

  created_trx?: OrderBy | null;

  instructions?: OrderBy | null;

  order_id?: OrderBy | null;

  price?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.order_detail" */
export interface KmealOrderDetailOrderBy {
  instructions?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;

  listing_type?: OrderBy | null;

  orderByorderId?: KmealOrderOrderBy | null;

  order_id?: OrderBy | null;

  ordered_price?: OrderBy | null;

  qty?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.order_status" */
export interface KmealOrderStatusOrderBy {
  created_at?: OrderBy | null;

  orderByorderId?: KmealOrderOrderBy | null;

  order_id?: OrderBy | null;

  order_status?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.payment" */
export interface KmealPaymentOrderBy {
  orderByorderId?: KmealOrderOrderBy | null;

  order_id?: OrderBy | null;

  payment_id?: OrderBy | null;

  payment_status?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesOrderBy {
  category?: OrderBy | null;

  restaurantByrestaurantId?: KmealRestaurantOrderBy | null;

  restaurant_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.item_types" */
export interface KmealItemTypesOrderBy {
  itemByitemId?: KmealItemOrderBy | null;

  item_id?: OrderBy | null;

  item_type?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.listing_items" */
export interface KmealListingItemsOrderBy {
  itemByitemId?: KmealItemOrderBy | null;

  item_id?: OrderBy | null;

  listingBylistingId?: KmealListingOrderBy | null;

  listing_id?: OrderBy | null;
}
/** ordering options when selecting data from "kmeal.categories" */
export interface KmealCategoriesOrderBy {
  alias?: OrderBy | null;

  title?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal.categories". All fields are combined with a logical 'AND'. */
export interface KmealCategoriesBoolExp {
  _and?: (KmealCategoriesBoolExp | null)[] | null;

  _not?: KmealCategoriesBoolExp | null;

  _or?: (KmealCategoriesBoolExp | null)[] | null;

  alias?: VarcharComparisonExp | null;

  title?: VarcharComparisonExp | null;
}
/** ordering options when selecting data from "kmeal.restaurant_location" */
export interface KmealRestaurantLocationOrderBy {
  address?: OrderBy | null;

  description?: OrderBy | null;

  distance?: OrderBy | null;

  location?: OrderBy | null;

  logo?: OrderBy | null;

  name?: OrderBy | null;

  owner?: OrderBy | null;

  phone?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "kmeal.restaurant_location". All fields are combined with a logical 'AND'. */
export interface KmealRestaurantLocationBoolExp {
  _and?: (KmealRestaurantLocationBoolExp | null)[] | null;

  _not?: KmealRestaurantLocationBoolExp | null;

  _or?: (KmealRestaurantLocationBoolExp | null)[] | null;

  address?: TextComparisonExp | null;

  description?: TextComparisonExp | null;

  distance?: Float8ComparisonExp | null;

  location?: GeographyComparisonExp | null;

  logo?: TextComparisonExp | null;

  name?: TextComparisonExp | null;

  owner?: BpcharComparisonExp | null;

  phone?: VarcharComparisonExp | null;
}
/** ordering options when selecting data from "raster_columns" */
export interface RasterColumnsOrderBy {
  blocksize_x?: OrderBy | null;

  blocksize_y?: OrderBy | null;

  extent?: OrderBy | null;

  nodata_values?: OrderBy | null;

  num_bands?: OrderBy | null;

  out_db?: OrderBy | null;

  pixel_types?: OrderBy | null;

  r_raster_column?: OrderBy | null;

  r_table_catalog?: OrderBy | null;

  r_table_name?: OrderBy | null;

  r_table_schema?: OrderBy | null;

  regular_blocking?: OrderBy | null;

  same_alignment?: OrderBy | null;

  scale_x?: OrderBy | null;

  scale_y?: OrderBy | null;

  spatial_index?: OrderBy | null;

  srid?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "raster_columns". All fields are combined with a logical 'AND'. */
export interface RasterColumnsBoolExp {
  _and?: (RasterColumnsBoolExp | null)[] | null;

  _not?: RasterColumnsBoolExp | null;

  _or?: (RasterColumnsBoolExp | null)[] | null;

  blocksize_x?: IntegerComparisonExp | null;

  blocksize_y?: IntegerComparisonExp | null;

  extent?: GeometryComparisonExp | null;

  nodata_values?: _Float8ComparisonExp | null;

  num_bands?: IntegerComparisonExp | null;

  out_db?: _BoolComparisonExp | null;

  pixel_types?: _TextComparisonExp | null;

  r_raster_column?: NameComparisonExp | null;

  r_table_catalog?: NameComparisonExp | null;

  r_table_name?: NameComparisonExp | null;

  r_table_schema?: NameComparisonExp | null;

  regular_blocking?: BooleanComparisonExp | null;

  same_alignment?: BooleanComparisonExp | null;

  scale_x?: Float8ComparisonExp | null;

  scale_y?: Float8ComparisonExp | null;

  spatial_index?: BooleanComparisonExp | null;

  srid?: IntegerComparisonExp | null;
}
/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export interface GeometryComparisonExp {
  _eq?: Geometry | null;

  _gt?: Geometry | null;

  _gte?: Geometry | null;

  _in?: (Geometry | null)[] | null;

  _is_null?: boolean | null;

  _lt?: Geometry | null;

  _lte?: Geometry | null;

  _neq?: Geometry | null;

  _nin?: (Geometry | null)[] | null;
}
/** expression to compare columns of type _float8. All fields are combined with logical 'AND'. */
export interface _Float8ComparisonExp {
  _eq?: _Float8 | null;

  _gt?: _Float8 | null;

  _gte?: _Float8 | null;

  _in?: (_Float8 | null)[] | null;

  _is_null?: boolean | null;

  _lt?: _Float8 | null;

  _lte?: _Float8 | null;

  _neq?: _Float8 | null;

  _nin?: (_Float8 | null)[] | null;
}
/** expression to compare columns of type _bool. All fields are combined with logical 'AND'. */
export interface _BoolComparisonExp {
  _eq?: _Bool | null;

  _gt?: _Bool | null;

  _gte?: _Bool | null;

  _in?: (_Bool | null)[] | null;

  _is_null?: boolean | null;

  _lt?: _Bool | null;

  _lte?: _Bool | null;

  _neq?: _Bool | null;

  _nin?: (_Bool | null)[] | null;
}
/** expression to compare columns of type _text. All fields are combined with logical 'AND'. */
export interface _TextComparisonExp {
  _eq?: _Text | null;

  _gt?: _Text | null;

  _gte?: _Text | null;

  _in?: (_Text | null)[] | null;

  _is_null?: boolean | null;

  _lt?: _Text | null;

  _lte?: _Text | null;

  _neq?: _Text | null;

  _nin?: (_Text | null)[] | null;
}
/** ordering options when selecting data from "raster_overviews" */
export interface RasterOverviewsOrderBy {
  o_raster_column?: OrderBy | null;

  o_table_catalog?: OrderBy | null;

  o_table_name?: OrderBy | null;

  o_table_schema?: OrderBy | null;

  overview_factor?: OrderBy | null;

  r_raster_column?: OrderBy | null;

  r_table_catalog?: OrderBy | null;

  r_table_name?: OrderBy | null;

  r_table_schema?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "raster_overviews". All fields are combined with a logical 'AND'. */
export interface RasterOverviewsBoolExp {
  _and?: (RasterOverviewsBoolExp | null)[] | null;

  _not?: RasterOverviewsBoolExp | null;

  _or?: (RasterOverviewsBoolExp | null)[] | null;

  o_raster_column?: NameComparisonExp | null;

  o_table_catalog?: NameComparisonExp | null;

  o_table_name?: NameComparisonExp | null;

  o_table_schema?: NameComparisonExp | null;

  overview_factor?: IntegerComparisonExp | null;

  r_raster_column?: NameComparisonExp | null;

  r_table_catalog?: NameComparisonExp | null;

  r_table_name?: NameComparisonExp | null;

  r_table_schema?: NameComparisonExp | null;
}
/** ordering options when selecting data from "spatial_ref_sys" */
export interface SpatialRefSysOrderBy {
  auth_name?: OrderBy | null;

  auth_srid?: OrderBy | null;

  proj4text?: OrderBy | null;

  srid?: OrderBy | null;

  srtext?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "spatial_ref_sys". All fields are combined with a logical 'AND'. */
export interface SpatialRefSysBoolExp {
  _and?: (SpatialRefSysBoolExp | null)[] | null;

  _not?: SpatialRefSysBoolExp | null;

  _or?: (SpatialRefSysBoolExp | null)[] | null;

  auth_name?: VarcharComparisonExp | null;

  auth_srid?: IntegerComparisonExp | null;

  proj4text?: VarcharComparisonExp | null;

  srid?: IntegerComparisonExp | null;

  srtext?: VarcharComparisonExp | null;
}
/** ordering options when selecting data from "topology.layer" */
export interface TopologyLayerOrderBy {
  child_id?: OrderBy | null;

  feature_column?: OrderBy | null;

  feature_type?: OrderBy | null;

  layer_id?: OrderBy | null;

  level?: OrderBy | null;

  schema_name?: OrderBy | null;

  table_name?: OrderBy | null;

  topologyBytopologyId?: TopologyTopologyOrderBy | null;

  topology_id?: OrderBy | null;
}
/** ordering options when selecting data from "topology.topology" */
export interface TopologyTopologyOrderBy {
  hasz?: OrderBy | null;

  id?: OrderBy | null;

  name?: OrderBy | null;

  precision?: OrderBy | null;

  srid?: OrderBy | null;
}
/** Boolean expression to filter rows from the table "topology.layer". All fields are combined with a logical 'AND'. */
export interface TopologyLayerBoolExp {
  _and?: (TopologyLayerBoolExp | null)[] | null;

  _not?: TopologyLayerBoolExp | null;

  _or?: (TopologyLayerBoolExp | null)[] | null;

  child_id?: IntegerComparisonExp | null;

  feature_column?: VarcharComparisonExp | null;

  feature_type?: IntegerComparisonExp | null;

  layer_id?: IntegerComparisonExp | null;

  level?: IntegerComparisonExp | null;

  schema_name?: VarcharComparisonExp | null;

  table_name?: VarcharComparisonExp | null;

  topologyBytopologyId?: TopologyTopologyBoolExp | null;

  topology_id?: IntegerComparisonExp | null;
}
/** Boolean expression to filter rows from the table "topology.topology". All fields are combined with a logical 'AND'. */
export interface TopologyTopologyBoolExp {
  _and?: (TopologyTopologyBoolExp | null)[] | null;

  _not?: TopologyTopologyBoolExp | null;

  _or?: (TopologyTopologyBoolExp | null)[] | null;

  hasz?: BooleanComparisonExp | null;

  id?: IntegerComparisonExp | null;

  layersBytopologyId?: TopologyLayerBoolExp | null;

  name?: VarcharComparisonExp | null;

  precision?: Float8ComparisonExp | null;

  srid?: IntegerComparisonExp | null;
}
/** input type for inserting data into table "geometry_columns" */
export interface GeometryColumnsInsertInput {
  coord_dimension?: number | null;

  f_geometry_column?: Name | null;

  f_table_catalog?: string | null;

  f_table_name?: Name | null;

  f_table_schema?: Name | null;

  srid?: number | null;

  type?: string | null;
}
/** input type for inserting data into table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidInsertInput {
  block_number?: number | null;

  txid?: Bigint | null;
}
/** on conflict condition type for table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealBlockNumberTxidConstraint;

  update_columns?: KmealBlockNumberTxidUpdateColumn[] | null;
}
/** input type for inserting data into table "kmeal._index_state" */
export interface KmealIndexStateInsertInput {
  block_hash?: string | null;

  block_number?: number | null;

  id?: number | null;

  is_replay?: boolean | null;
}
/** on conflict condition type for table "kmeal._index_state" */
export interface KmealIndexStateOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealIndexStateConstraint;

  update_columns?: KmealIndexStateUpdateColumn[] | null;
}
/** input type for inserting data into table "kmeal.account" */
export interface KmealAccountInsertInput {
  _dmx_created_at?: Timestamp | null;

  account_type?: Bpchar | null;

  balance?: Numeric | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dpordersBybuyer?: KmealDporderArrRelInsertInput | null;

  ordersBybuyer?: KmealOrderArrRelInsertInput | null;

  owner?: Bpchar | null;

  restaurantsByowner?: KmealRestaurantArrRelInsertInput | null;
}
/** input type for inserting array relation for remote table "kmeal.dporder" */
export interface KmealDporderArrRelInsertInput {
  data: KmealDporderInsertInput[];

  on_conflict?: KmealDporderOnConflict | null;
}
/** input type for inserting data into table "kmeal.dporder" */
export interface KmealDporderInsertInput {
  _dmx_created_at?: Timestamp | null;

  accountBybuyer?: KmealAccountObjRelInsertInput | null;

  bid_price?: string | null;

  buyer?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dporder_id?: number | null;

  instructions?: string | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;

  order_id?: number | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.account" */
export interface KmealAccountObjRelInsertInput {
  data: KmealAccountInsertInput;

  on_conflict?: KmealAccountOnConflict | null;
}
/** on conflict condition type for table "kmeal.account" */
export interface KmealAccountOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealAccountConstraint;

  update_columns?: KmealAccountUpdateColumn[] | null;
}
/** input type for inserting object relation for remote table "kmeal.listing" */
export interface KmealListingObjRelInsertInput {
  data: KmealListingInsertInput;

  on_conflict?: KmealListingOnConflict | null;
}
/** input type for inserting data into table "kmeal.listing" */
export interface KmealListingInsertInput {
  _dmx_created_at?: Timestamp | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dplistingsBylistingId?: KmealDplistingArrRelInsertInput | null;

  dpordersBylistingId?: KmealDporderArrRelInsertInput | null;

  isactive?: boolean | null;

  list_price?: Numeric | null;

  list_type?: Bpchar | null;

  listingItemSidessBylistingId?: KmealListingItemSidesArrRelInsertInput | null;

  listingItemssBylistingId?: KmealListingItemsArrRelInsertInput | null;

  listing_id?: number | null;

  orderDetailsBylistingId?: KmealOrderDetailArrRelInsertInput | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.dplisting" */
export interface KmealDplistingArrRelInsertInput {
  data: KmealDplistingInsertInput[];

  on_conflict?: KmealDplistingOnConflict | null;
}
/** input type for inserting data into table "kmeal.dplisting" */
export interface KmealDplistingInsertInput {
  duration?: number | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;

  min_price?: Numeric | null;

  quantity?: number | null;

  sliding_rate?: number | null;

  start?: number | null;

  status?: number | null;
}
/** on conflict condition type for table "kmeal.dplisting" */
export interface KmealDplistingOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealDplistingConstraint;

  update_columns?: KmealDplistingUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesArrRelInsertInput {
  data: KmealListingItemSidesInsertInput[];
}
/** input type for inserting data into table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesInsertInput {
  itemByitemId?: KmealItemObjRelInsertInput | null;

  item_id?: number | null;

  list_price?: Numeric | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.item" */
export interface KmealItemObjRelInsertInput {
  data: KmealItemInsertInput;

  on_conflict?: KmealItemOnConflict | null;
}
/** input type for inserting data into table "kmeal.item" */
export interface KmealItemInsertInput {
  _dmx_created_at?: Timestamp | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  description?: string | null;

  groupsByitemId?: KmealGroupArrRelInsertInput | null;

  itemTypessByitemId?: KmealItemTypesArrRelInsertInput | null;

  item_id?: number | null;

  item_name?: string | null;

  listingItemSidessByitemId?: KmealListingItemSidesArrRelInsertInput | null;

  listingItemssByitemId?: KmealListingItemsArrRelInsertInput | null;

  photo?: string | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.group" */
export interface KmealGroupArrRelInsertInput {
  data: KmealGroupInsertInput[];
}
/** input type for inserting data into table "kmeal.group" */
export interface KmealGroupInsertInput {
  group_id?: number | null;

  itemByitemId?: KmealItemObjRelInsertInput | null;

  item_id?: number | null;

  restaurantGroupBygroupId?: KmealRestaurantGroupObjRelInsertInput | null;
}
/** input type for inserting object relation for remote table "kmeal.restaurant_group" */
export interface KmealRestaurantGroupObjRelInsertInput {
  data: KmealRestaurantGroupInsertInput;

  on_conflict?: KmealRestaurantGroupOnConflict | null;
}
/** input type for inserting data into table "kmeal.restaurant_group" */
export interface KmealRestaurantGroupInsertInput {
  group_id?: number | null;

  group_name?: string | null;

  groupsBygroupId?: KmealGroupArrRelInsertInput | null;

  menu_book?: string | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.restaurant" */
export interface KmealRestaurantObjRelInsertInput {
  data: KmealRestaurantInsertInput;

  on_conflict?: KmealRestaurantOnConflict | null;
}
/** input type for inserting data into table "kmeal.restaurant" */
export interface KmealRestaurantInsertInput {
  _dmx_created_at?: Timestamp | null;

  accountByowner?: KmealAccountObjRelInsertInput | null;

  address?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  description?: string | null;

  dpordersByrestaurantId?: KmealDporderArrRelInsertInput | null;

  isactive?: boolean | null;

  itemsByrestaurantId?: KmealItemArrRelInsertInput | null;

  latitude?: Float8 | null;

  listingsByrestaurantId?: KmealListingArrRelInsertInput | null;

  location?: Geography | null;

  logo?: string | null;

  longitude?: Float8 | null;

  name?: string | null;

  ordersByrestaurantId?: KmealOrderArrRelInsertInput | null;

  owner?: Bpchar | null;

  phone?: string | null;

  rating?: number | null;

  restaurantCategoriessByrestaurantId?: KmealRestaurantCategoriesArrRelInsertInput | null;

  restaurantGroupsByrestaurantId?: KmealRestaurantGroupArrRelInsertInput | null;

  restaurant_id?: number | null;

  timeofoperation?: string | null;

  yelp_id?: string | null;
}
/** input type for inserting array relation for remote table "kmeal.item" */
export interface KmealItemArrRelInsertInput {
  data: KmealItemInsertInput[];

  on_conflict?: KmealItemOnConflict | null;
}
/** on conflict condition type for table "kmeal.item" */
export interface KmealItemOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealItemConstraint;

  update_columns?: KmealItemUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.listing" */
export interface KmealListingArrRelInsertInput {
  data: KmealListingInsertInput[];

  on_conflict?: KmealListingOnConflict | null;
}
/** on conflict condition type for table "kmeal.listing" */
export interface KmealListingOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealListingConstraint;

  update_columns?: KmealListingUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.order" */
export interface KmealOrderArrRelInsertInput {
  data: KmealOrderInsertInput[];

  on_conflict?: KmealOrderOnConflict | null;
}
/** input type for inserting data into table "kmeal.order" */
export interface KmealOrderInsertInput {
  _dmx_created_at?: Timestamp | null;

  accountBybuyer?: KmealAccountObjRelInsertInput | null;

  buyer?: Bpchar | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  instructions?: string | null;

  orderDetailsByorderId?: KmealOrderDetailArrRelInsertInput | null;

  orderStatussByorderId?: KmealOrderStatusArrRelInsertInput | null;

  order_id?: number | null;

  paymentsByorderId?: KmealPaymentArrRelInsertInput | null;

  price?: string | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.order_detail" */
export interface KmealOrderDetailArrRelInsertInput {
  data: KmealOrderDetailInsertInput[];

  on_conflict?: KmealOrderDetailOnConflict | null;
}
/** input type for inserting data into table "kmeal.order_detail" */
export interface KmealOrderDetailInsertInput {
  instructions?: string | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;

  listing_type?: Bpchar | null;

  orderByorderId?: KmealOrderObjRelInsertInput | null;

  order_id?: number | null;

  ordered_price?: number | null;

  qty?: number | null;
}
/** input type for inserting object relation for remote table "kmeal.order" */
export interface KmealOrderObjRelInsertInput {
  data: KmealOrderInsertInput;

  on_conflict?: KmealOrderOnConflict | null;
}
/** on conflict condition type for table "kmeal.order" */
export interface KmealOrderOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealOrderConstraint;

  update_columns?: KmealOrderUpdateColumn[] | null;
}
/** on conflict condition type for table "kmeal.order_detail" */
export interface KmealOrderDetailOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealOrderDetailConstraint;

  update_columns?: KmealOrderDetailUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.order_status" */
export interface KmealOrderStatusArrRelInsertInput {
  data: KmealOrderStatusInsertInput[];

  on_conflict?: KmealOrderStatusOnConflict | null;
}
/** input type for inserting data into table "kmeal.order_status" */
export interface KmealOrderStatusInsertInput {
  created_at?: Timestamp | null;

  orderByorderId?: KmealOrderObjRelInsertInput | null;

  order_id?: number | null;

  order_status?: number | null;
}
/** on conflict condition type for table "kmeal.order_status" */
export interface KmealOrderStatusOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealOrderStatusConstraint;

  update_columns?: KmealOrderStatusUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.payment" */
export interface KmealPaymentArrRelInsertInput {
  data: KmealPaymentInsertInput[];

  on_conflict?: KmealPaymentOnConflict | null;
}
/** input type for inserting data into table "kmeal.payment" */
export interface KmealPaymentInsertInput {
  orderByorderId?: KmealOrderObjRelInsertInput | null;

  order_id?: number | null;

  payment_id?: number | null;

  payment_status?: Bpchar | null;
}
/** on conflict condition type for table "kmeal.payment" */
export interface KmealPaymentOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealPaymentConstraint;

  update_columns?: KmealPaymentUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesArrRelInsertInput {
  data: KmealRestaurantCategoriesInsertInput[];
}
/** input type for inserting data into table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesInsertInput {
  category?: string | null;

  restaurantByrestaurantId?: KmealRestaurantObjRelInsertInput | null;

  restaurant_id?: number | null;
}
/** input type for inserting array relation for remote table "kmeal.restaurant_group" */
export interface KmealRestaurantGroupArrRelInsertInput {
  data: KmealRestaurantGroupInsertInput[];

  on_conflict?: KmealRestaurantGroupOnConflict | null;
}
/** on conflict condition type for table "kmeal.restaurant_group" */
export interface KmealRestaurantGroupOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealRestaurantGroupConstraint;

  update_columns?: KmealRestaurantGroupUpdateColumn[] | null;
}
/** on conflict condition type for table "kmeal.restaurant" */
export interface KmealRestaurantOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealRestaurantConstraint;

  update_columns?: KmealRestaurantUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.item_types" */
export interface KmealItemTypesArrRelInsertInput {
  data: KmealItemTypesInsertInput[];
}
/** input type for inserting data into table "kmeal.item_types" */
export interface KmealItemTypesInsertInput {
  itemByitemId?: KmealItemObjRelInsertInput | null;

  item_id?: number | null;

  item_type?: string | null;
}
/** input type for inserting array relation for remote table "kmeal.listing_items" */
export interface KmealListingItemsArrRelInsertInput {
  data: KmealListingItemsInsertInput[];
}
/** input type for inserting data into table "kmeal.listing_items" */
export interface KmealListingItemsInsertInput {
  itemByitemId?: KmealItemObjRelInsertInput | null;

  item_id?: number | null;

  listingBylistingId?: KmealListingObjRelInsertInput | null;

  listing_id?: number | null;
}
/** on conflict condition type for table "kmeal.dporder" */
export interface KmealDporderOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealDporderConstraint;

  update_columns?: KmealDporderUpdateColumn[] | null;
}
/** input type for inserting array relation for remote table "kmeal.restaurant" */
export interface KmealRestaurantArrRelInsertInput {
  data: KmealRestaurantInsertInput[];

  on_conflict?: KmealRestaurantOnConflict | null;
}
/** input type for inserting data into table "kmeal.categories" */
export interface KmealCategoriesInsertInput {
  alias?: string | null;

  title?: string | null;
}
/** on conflict condition type for table "kmeal.categories" */
export interface KmealCategoriesOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: KmealCategoriesConstraint;

  update_columns?: KmealCategoriesUpdateColumn[] | null;
}
/** input type for inserting data into table "spatial_ref_sys" */
export interface SpatialRefSysInsertInput {
  auth_name?: string | null;

  auth_srid?: number | null;

  proj4text?: string | null;

  srid?: number | null;

  srtext?: string | null;
}
/** on conflict condition type for table "spatial_ref_sys" */
export interface SpatialRefSysOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: SpatialRefSysConstraint;

  update_columns?: SpatialRefSysUpdateColumn[] | null;
}
/** input type for inserting data into table "topology.layer" */
export interface TopologyLayerInsertInput {
  child_id?: number | null;

  feature_column?: string | null;

  feature_type?: number | null;

  layer_id?: number | null;

  level?: number | null;

  schema_name?: string | null;

  table_name?: string | null;

  topologyBytopologyId?: TopologyTopologyObjRelInsertInput | null;

  topology_id?: number | null;
}
/** input type for inserting object relation for remote table "topology.topology" */
export interface TopologyTopologyObjRelInsertInput {
  data: TopologyTopologyInsertInput;

  on_conflict?: TopologyTopologyOnConflict | null;
}
/** input type for inserting data into table "topology.topology" */
export interface TopologyTopologyInsertInput {
  hasz?: boolean | null;

  id?: number | null;

  layersBytopologyId?: TopologyLayerArrRelInsertInput | null;

  name?: string | null;

  precision?: Float8 | null;

  srid?: number | null;
}
/** input type for inserting array relation for remote table "topology.layer" */
export interface TopologyLayerArrRelInsertInput {
  data: TopologyLayerInsertInput[];

  on_conflict?: TopologyLayerOnConflict | null;
}
/** on conflict condition type for table "topology.layer" */
export interface TopologyLayerOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: TopologyLayerConstraint;

  update_columns?: TopologyLayerUpdateColumn[] | null;
}
/** on conflict condition type for table "topology.topology" */
export interface TopologyTopologyOnConflict {
  /** action when conflict occurs (deprecated) */
  action?: ConflictAction | null;

  constraint: TopologyTopologyConstraint;

  update_columns?: TopologyTopologyUpdateColumn[] | null;
}
/** input type for incrementing integer columne in table "geometry_columns" */
export interface GeometryColumnsIncInput {
  coord_dimension?: number | null;

  srid?: number | null;
}
/** input type for updating data in table "geometry_columns" */
export interface GeometryColumnsSetInput {
  coord_dimension?: number | null;

  f_geometry_column?: Name | null;

  f_table_catalog?: string | null;

  f_table_name?: Name | null;

  f_table_schema?: Name | null;

  srid?: number | null;

  type?: string | null;
}
/** input type for incrementing integer columne in table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidIncInput {
  block_number?: number | null;

  txid?: Bigint | null;
}
/** input type for updating data in table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidSetInput {
  block_number?: number | null;

  txid?: Bigint | null;
}
/** input type for incrementing integer columne in table "kmeal._index_state" */
export interface KmealIndexStateIncInput {
  block_number?: number | null;

  id?: number | null;
}
/** input type for updating data in table "kmeal._index_state" */
export interface KmealIndexStateSetInput {
  block_hash?: string | null;

  block_number?: number | null;

  id?: number | null;

  is_replay?: boolean | null;
}
/** input type for incrementing integer columne in table "kmeal.account" */
export interface KmealAccountIncInput {
  created_block?: Bigint | null;
}
/** input type for updating data in table "kmeal.account" */
export interface KmealAccountSetInput {
  _dmx_created_at?: Timestamp | null;

  account_type?: Bpchar | null;

  balance?: Numeric | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  owner?: Bpchar | null;
}
/** input type for updating data in table "kmeal.categories" */
export interface KmealCategoriesSetInput {
  alias?: string | null;

  title?: string | null;
}
/** input type for incrementing integer columne in table "kmeal.dplisting" */
export interface KmealDplistingIncInput {
  duration?: number | null;

  listing_id?: number | null;

  quantity?: number | null;

  sliding_rate?: number | null;

  start?: number | null;

  status?: number | null;
}
/** input type for updating data in table "kmeal.dplisting" */
export interface KmealDplistingSetInput {
  duration?: number | null;

  listing_id?: number | null;

  min_price?: Numeric | null;

  quantity?: number | null;

  sliding_rate?: number | null;

  start?: number | null;

  status?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.dporder" */
export interface KmealDporderIncInput {
  created_block?: Bigint | null;

  dporder_id?: number | null;

  listing_id?: number | null;

  order_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.dporder" */
export interface KmealDporderSetInput {
  _dmx_created_at?: Timestamp | null;

  bid_price?: string | null;

  buyer?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  dporder_id?: number | null;

  instructions?: string | null;

  listing_id?: number | null;

  order_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.group" */
export interface KmealGroupIncInput {
  group_id?: number | null;

  item_id?: number | null;
}
/** input type for updating data in table "kmeal.group" */
export interface KmealGroupSetInput {
  group_id?: number | null;

  item_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.item" */
export interface KmealItemIncInput {
  created_block?: Bigint | null;

  item_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.item" */
export interface KmealItemSetInput {
  _dmx_created_at?: Timestamp | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  description?: string | null;

  item_id?: number | null;

  item_name?: string | null;

  photo?: string | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.item_types" */
export interface KmealItemTypesIncInput {
  item_id?: number | null;
}
/** input type for updating data in table "kmeal.item_types" */
export interface KmealItemTypesSetInput {
  item_id?: number | null;

  item_type?: string | null;
}
/** input type for incrementing integer columne in table "kmeal.listing" */
export interface KmealListingIncInput {
  created_block?: Bigint | null;

  listing_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.listing" */
export interface KmealListingSetInput {
  _dmx_created_at?: Timestamp | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  isactive?: boolean | null;

  list_price?: Numeric | null;

  list_type?: Bpchar | null;

  listing_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesIncInput {
  item_id?: number | null;

  listing_id?: number | null;
}
/** input type for updating data in table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesSetInput {
  item_id?: number | null;

  list_price?: Numeric | null;

  listing_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.listing_items" */
export interface KmealListingItemsIncInput {
  item_id?: number | null;

  listing_id?: number | null;
}
/** input type for updating data in table "kmeal.listing_items" */
export interface KmealListingItemsSetInput {
  item_id?: number | null;

  listing_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.order" */
export interface KmealOrderIncInput {
  created_block?: Bigint | null;

  order_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.order" */
export interface KmealOrderSetInput {
  _dmx_created_at?: Timestamp | null;

  buyer?: Bpchar | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  instructions?: string | null;

  order_id?: number | null;

  price?: string | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.order_detail" */
export interface KmealOrderDetailIncInput {
  listing_id?: number | null;

  order_id?: number | null;

  ordered_price?: number | null;

  qty?: number | null;
}
/** input type for updating data in table "kmeal.order_detail" */
export interface KmealOrderDetailSetInput {
  instructions?: string | null;

  listing_id?: number | null;

  listing_type?: Bpchar | null;

  order_id?: number | null;

  ordered_price?: number | null;

  qty?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.order_status" */
export interface KmealOrderStatusIncInput {
  order_id?: number | null;

  order_status?: number | null;
}
/** input type for updating data in table "kmeal.order_status" */
export interface KmealOrderStatusSetInput {
  created_at?: Timestamp | null;

  order_id?: number | null;

  order_status?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.payment" */
export interface KmealPaymentIncInput {
  order_id?: number | null;

  payment_id?: number | null;
}
/** input type for updating data in table "kmeal.payment" */
export interface KmealPaymentSetInput {
  order_id?: number | null;

  payment_id?: number | null;

  payment_status?: Bpchar | null;
}
/** input type for incrementing integer columne in table "kmeal.restaurant" */
export interface KmealRestaurantIncInput {
  created_block?: Bigint | null;

  rating?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.restaurant" */
export interface KmealRestaurantSetInput {
  _dmx_created_at?: Timestamp | null;

  address?: string | null;

  created_at?: Timestamp | null;

  created_block?: Bigint | null;

  created_eosacc?: string | null;

  created_trx?: string | null;

  description?: string | null;

  isactive?: boolean | null;

  latitude?: Float8 | null;

  location?: Geography | null;

  logo?: string | null;

  longitude?: Float8 | null;

  name?: string | null;

  owner?: Bpchar | null;

  phone?: string | null;

  rating?: number | null;

  restaurant_id?: number | null;

  timeofoperation?: string | null;

  yelp_id?: string | null;
}
/** input type for incrementing integer columne in table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesIncInput {
  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesSetInput {
  category?: string | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "kmeal.restaurant_group" */
export interface KmealRestaurantGroupIncInput {
  group_id?: number | null;

  restaurant_id?: number | null;
}
/** input type for updating data in table "kmeal.restaurant_group" */
export interface KmealRestaurantGroupSetInput {
  group_id?: number | null;

  group_name?: string | null;

  menu_book?: string | null;

  restaurant_id?: number | null;
}
/** input type for incrementing integer columne in table "spatial_ref_sys" */
export interface SpatialRefSysIncInput {
  auth_srid?: number | null;

  srid?: number | null;
}
/** input type for updating data in table "spatial_ref_sys" */
export interface SpatialRefSysSetInput {
  auth_name?: string | null;

  auth_srid?: number | null;

  proj4text?: string | null;

  srid?: number | null;

  srtext?: string | null;
}
/** input type for incrementing integer columne in table "topology.layer" */
export interface TopologyLayerIncInput {
  child_id?: number | null;

  feature_type?: number | null;

  layer_id?: number | null;

  level?: number | null;

  topology_id?: number | null;
}
/** input type for updating data in table "topology.layer" */
export interface TopologyLayerSetInput {
  child_id?: number | null;

  feature_column?: string | null;

  feature_type?: number | null;

  layer_id?: number | null;

  level?: number | null;

  schema_name?: string | null;

  table_name?: string | null;

  topology_id?: number | null;
}
/** input type for incrementing integer columne in table "topology.topology" */
export interface TopologyTopologyIncInput {
  id?: number | null;

  srid?: number | null;
}
/** input type for updating data in table "topology.topology" */
export interface TopologyTopologySetInput {
  hasz?: boolean | null;

  id?: number | null;

  name?: string | null;

  precision?: Float8 | null;

  srid?: number | null;
}
/** input type for inserting array relation for remote table "geometry_columns" */
export interface GeometryColumnsArrRelInsertInput {
  data: GeometryColumnsInsertInput[];
}
/** input type for inserting object relation for remote table "geometry_columns" */
export interface GeometryColumnsObjRelInsertInput {
  data: GeometryColumnsInsertInput;
}
/** input type for inserting array relation for remote table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidArrRelInsertInput {
  data: KmealBlockNumberTxidInsertInput[];

  on_conflict?: KmealBlockNumberTxidOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal._block_number_txid" */
export interface KmealBlockNumberTxidObjRelInsertInput {
  data: KmealBlockNumberTxidInsertInput;

  on_conflict?: KmealBlockNumberTxidOnConflict | null;
}
/** input type for inserting array relation for remote table "kmeal._index_state" */
export interface KmealIndexStateArrRelInsertInput {
  data: KmealIndexStateInsertInput[];

  on_conflict?: KmealIndexStateOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal._index_state" */
export interface KmealIndexStateObjRelInsertInput {
  data: KmealIndexStateInsertInput;

  on_conflict?: KmealIndexStateOnConflict | null;
}
/** input type for inserting array relation for remote table "kmeal.account" */
export interface KmealAccountArrRelInsertInput {
  data: KmealAccountInsertInput[];

  on_conflict?: KmealAccountOnConflict | null;
}
/** input type for inserting array relation for remote table "kmeal.categories" */
export interface KmealCategoriesArrRelInsertInput {
  data: KmealCategoriesInsertInput[];

  on_conflict?: KmealCategoriesOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.categories" */
export interface KmealCategoriesObjRelInsertInput {
  data: KmealCategoriesInsertInput;

  on_conflict?: KmealCategoriesOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.dplisting" */
export interface KmealDplistingObjRelInsertInput {
  data: KmealDplistingInsertInput;

  on_conflict?: KmealDplistingOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.dporder" */
export interface KmealDporderObjRelInsertInput {
  data: KmealDporderInsertInput;

  on_conflict?: KmealDporderOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.group" */
export interface KmealGroupObjRelInsertInput {
  data: KmealGroupInsertInput;
}
/** input type for inserting object relation for remote table "kmeal.item_types" */
export interface KmealItemTypesObjRelInsertInput {
  data: KmealItemTypesInsertInput;
}
/** input type for inserting object relation for remote table "kmeal.listing_item_sides" */
export interface KmealListingItemSidesObjRelInsertInput {
  data: KmealListingItemSidesInsertInput;
}
/** input type for inserting object relation for remote table "kmeal.listing_items" */
export interface KmealListingItemsObjRelInsertInput {
  data: KmealListingItemsInsertInput;
}
/** input type for inserting object relation for remote table "kmeal.order_detail" */
export interface KmealOrderDetailObjRelInsertInput {
  data: KmealOrderDetailInsertInput;

  on_conflict?: KmealOrderDetailOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.order_status" */
export interface KmealOrderStatusObjRelInsertInput {
  data: KmealOrderStatusInsertInput;

  on_conflict?: KmealOrderStatusOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.payment" */
export interface KmealPaymentObjRelInsertInput {
  data: KmealPaymentInsertInput;

  on_conflict?: KmealPaymentOnConflict | null;
}
/** input type for inserting object relation for remote table "kmeal.restaurant_categories" */
export interface KmealRestaurantCategoriesObjRelInsertInput {
  data: KmealRestaurantCategoriesInsertInput;
}
/** input type for inserting array relation for remote table "spatial_ref_sys" */
export interface SpatialRefSysArrRelInsertInput {
  data: SpatialRefSysInsertInput[];

  on_conflict?: SpatialRefSysOnConflict | null;
}
/** input type for inserting object relation for remote table "spatial_ref_sys" */
export interface SpatialRefSysObjRelInsertInput {
  data: SpatialRefSysInsertInput;

  on_conflict?: SpatialRefSysOnConflict | null;
}
/** input type for inserting object relation for remote table "topology.layer" */
export interface TopologyLayerObjRelInsertInput {
  data: TopologyLayerInsertInput;

  on_conflict?: TopologyLayerOnConflict | null;
}
/** input type for inserting array relation for remote table "topology.topology" */
export interface TopologyTopologyArrRelInsertInput {
  data: TopologyTopologyInsertInput[];

  on_conflict?: TopologyTopologyOnConflict | null;
}
/** select columns of table "geography_columns" */
export enum GeographyColumnsSelectColumn {
  CoordDimension = "coord_dimension",
  FGeographyColumn = "f_geography_column",
  FTableCatalog = "f_table_catalog",
  FTableName = "f_table_name",
  FTableSchema = "f_table_schema",
  Srid = "srid",
  Type = "type"
}
/** column ordering options */
export enum OrderBy {
  Asc = "asc",
  AscNullsFirst = "asc_nulls_first",
  AscNullsLast = "asc_nulls_last",
  Desc = "desc",
  DescNullsFirst = "desc_nulls_first",
  DescNullsLast = "desc_nulls_last"
}
/** select columns of table "geometry_columns" */
export enum GeometryColumnsSelectColumn {
  CoordDimension = "coord_dimension",
  FGeometryColumn = "f_geometry_column",
  FTableCatalog = "f_table_catalog",
  FTableName = "f_table_name",
  FTableSchema = "f_table_schema",
  Srid = "srid",
  Type = "type"
}
/** select columns of table "kmeal._block_number_txid" */
export enum KmealBlockNumberTxidSelectColumn {
  BlockNumber = "block_number",
  Txid = "txid"
}
/** select columns of table "kmeal._index_state" */
export enum KmealIndexStateSelectColumn {
  BlockHash = "block_hash",
  BlockNumber = "block_number",
  Id = "id",
  IsReplay = "is_replay"
}
/** select columns of table "kmeal.account" */
export enum KmealAccountSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  AccountType = "account_type",
  Balance = "balance",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Owner = "owner"
}
/** select columns of table "kmeal.dporder" */
export enum KmealDporderSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  BidPrice = "bid_price",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  DporderId = "dporder_id",
  Instructions = "instructions",
  ListingId = "listing_id",
  OrderId = "order_id",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.dplisting" */
export enum KmealDplistingSelectColumn {
  Duration = "duration",
  ListingId = "listing_id",
  MinPrice = "min_price",
  Quantity = "quantity",
  SlidingRate = "sliding_rate",
  Start = "start",
  Status = "status"
}
/** select columns of table "kmeal.listing_item_sides" */
export enum KmealListingItemSidesSelectColumn {
  ItemId = "item_id",
  ListPrice = "list_price",
  ListingId = "listing_id"
}
/** select columns of table "kmeal.group" */
export enum KmealGroupSelectColumn {
  GroupId = "group_id",
  ItemId = "item_id"
}
/** select columns of table "kmeal.item" */
export enum KmealItemSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Description = "description",
  ItemId = "item_id",
  ItemName = "item_name",
  Photo = "photo",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.listing" */
export enum KmealListingSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Isactive = "isactive",
  ListPrice = "list_price",
  ListType = "list_type",
  ListingId = "listing_id",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.order" */
export enum KmealOrderSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Instructions = "instructions",
  OrderId = "order_id",
  Price = "price",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.order_detail" */
export enum KmealOrderDetailSelectColumn {
  Instructions = "instructions",
  ListingId = "listing_id",
  ListingType = "listing_type",
  OrderId = "order_id",
  OrderedPrice = "ordered_price",
  Qty = "qty"
}
/** select columns of table "kmeal.order_status" */
export enum KmealOrderStatusSelectColumn {
  CreatedAt = "created_at",
  OrderId = "order_id",
  OrderStatus = "order_status"
}
/** select columns of table "kmeal.payment" */
export enum KmealPaymentSelectColumn {
  OrderId = "order_id",
  PaymentId = "payment_id",
  PaymentStatus = "payment_status"
}
/** select columns of table "kmeal.restaurant_categories" */
export enum KmealRestaurantCategoriesSelectColumn {
  Category = "category",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.restaurant_group" */
export enum KmealRestaurantGroupSelectColumn {
  GroupId = "group_id",
  GroupName = "group_name",
  MenuBook = "menu_book",
  RestaurantId = "restaurant_id"
}
/** select columns of table "kmeal.item_types" */
export enum KmealItemTypesSelectColumn {
  ItemId = "item_id",
  ItemType = "item_type"
}
/** select columns of table "kmeal.listing_items" */
export enum KmealListingItemsSelectColumn {
  ItemId = "item_id",
  ListingId = "listing_id"
}
/** select columns of table "kmeal.restaurant" */
export enum KmealRestaurantSelectColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Address = "address",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Description = "description",
  Isactive = "isactive",
  Latitude = "latitude",
  Location = "location",
  Logo = "logo",
  Longitude = "longitude",
  Name = "name",
  Owner = "owner",
  Phone = "phone",
  Rating = "rating",
  RestaurantId = "restaurant_id",
  Timeofoperation = "timeofoperation",
  YelpId = "yelp_id"
}
/** select columns of table "kmeal.categories" */
export enum KmealCategoriesSelectColumn {
  Alias = "alias",
  Title = "title"
}
/** select columns of table "kmeal.restaurant_location" */
export enum KmealRestaurantLocationSelectColumn {
  Address = "address",
  Description = "description",
  Distance = "distance",
  Location = "location",
  Logo = "logo",
  Name = "name",
  Owner = "owner",
  Phone = "phone"
}
/** select columns of table "raster_columns" */
export enum RasterColumnsSelectColumn {
  BlocksizeX = "blocksize_x",
  BlocksizeY = "blocksize_y",
  Extent = "extent",
  NodataValues = "nodata_values",
  NumBands = "num_bands",
  OutDb = "out_db",
  PixelTypes = "pixel_types",
  RRasterColumn = "r_raster_column",
  RTableCatalog = "r_table_catalog",
  RTableName = "r_table_name",
  RTableSchema = "r_table_schema",
  RegularBlocking = "regular_blocking",
  SameAlignment = "same_alignment",
  ScaleX = "scale_x",
  ScaleY = "scale_y",
  SpatialIndex = "spatial_index",
  Srid = "srid"
}
/** select columns of table "raster_overviews" */
export enum RasterOverviewsSelectColumn {
  ORasterColumn = "o_raster_column",
  OTableCatalog = "o_table_catalog",
  OTableName = "o_table_name",
  OTableSchema = "o_table_schema",
  OverviewFactor = "overview_factor",
  RRasterColumn = "r_raster_column",
  RTableCatalog = "r_table_catalog",
  RTableName = "r_table_name",
  RTableSchema = "r_table_schema"
}
/** select columns of table "spatial_ref_sys" */
export enum SpatialRefSysSelectColumn {
  AuthName = "auth_name",
  AuthSrid = "auth_srid",
  Proj4text = "proj4text",
  Srid = "srid",
  Srtext = "srtext"
}
/** select columns of table "topology.layer" */
export enum TopologyLayerSelectColumn {
  ChildId = "child_id",
  FeatureColumn = "feature_column",
  FeatureType = "feature_type",
  LayerId = "layer_id",
  Level = "level",
  SchemaName = "schema_name",
  TableName = "table_name",
  TopologyId = "topology_id"
}
/** select columns of table "topology.topology" */
export enum TopologyTopologySelectColumn {
  Hasz = "hasz",
  Id = "id",
  Name = "name",
  Precision = "precision",
  Srid = "srid"
}
/** conflict action */
export enum ConflictAction {
  Ignore = "ignore",
  Update = "update"
}
/** unique or primary key constraints on table "kmeal._block_number_txid" */
export enum KmealBlockNumberTxidConstraint {
  _BlockNumberTxidPkey = "_block_number_txid_pkey"
}
/** update columns of table "kmeal._block_number_txid" */
export enum KmealBlockNumberTxidUpdateColumn {
  BlockNumber = "block_number",
  Txid = "txid"
}
/** unique or primary key constraints on table "kmeal._index_state" */
export enum KmealIndexStateConstraint {
  _IndexStatePkey = "_index_state_pkey"
}
/** update columns of table "kmeal._index_state" */
export enum KmealIndexStateUpdateColumn {
  BlockHash = "block_hash",
  BlockNumber = "block_number",
  Id = "id",
  IsReplay = "is_replay"
}
/** unique or primary key constraints on table "kmeal.account" */
export enum KmealAccountConstraint {
  AccountPkey = "account_pkey"
}
/** update columns of table "kmeal.account" */
export enum KmealAccountUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  AccountType = "account_type",
  Balance = "balance",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Owner = "owner"
}
/** unique or primary key constraints on table "kmeal.dplisting" */
export enum KmealDplistingConstraint {
  DplistingPkey = "dplisting_pkey"
}
/** update columns of table "kmeal.dplisting" */
export enum KmealDplistingUpdateColumn {
  Duration = "duration",
  ListingId = "listing_id",
  MinPrice = "min_price",
  Quantity = "quantity",
  SlidingRate = "sliding_rate",
  Start = "start",
  Status = "status"
}
/** unique or primary key constraints on table "kmeal.item" */
export enum KmealItemConstraint {
  ItemPkey = "item_pkey"
}
/** update columns of table "kmeal.item" */
export enum KmealItemUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Description = "description",
  ItemId = "item_id",
  ItemName = "item_name",
  Photo = "photo",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.listing" */
export enum KmealListingConstraint {
  ListingPkey = "listing_pkey"
}
/** update columns of table "kmeal.listing" */
export enum KmealListingUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Isactive = "isactive",
  ListPrice = "list_price",
  ListType = "list_type",
  ListingId = "listing_id",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.order" */
export enum KmealOrderConstraint {
  OrderPkey = "order_pkey"
}
/** update columns of table "kmeal.order" */
export enum KmealOrderUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Instructions = "instructions",
  OrderId = "order_id",
  Price = "price",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.order_detail" */
export enum KmealOrderDetailConstraint {
  OrderDetailPkey = "order_detail_pkey"
}
/** update columns of table "kmeal.order_detail" */
export enum KmealOrderDetailUpdateColumn {
  Instructions = "instructions",
  ListingId = "listing_id",
  ListingType = "listing_type",
  OrderId = "order_id",
  OrderedPrice = "ordered_price",
  Qty = "qty"
}
/** unique or primary key constraints on table "kmeal.order_status" */
export enum KmealOrderStatusConstraint {
  OrderStatusPkey = "order_status_pkey"
}
/** update columns of table "kmeal.order_status" */
export enum KmealOrderStatusUpdateColumn {
  CreatedAt = "created_at",
  OrderId = "order_id",
  OrderStatus = "order_status"
}
/** unique or primary key constraints on table "kmeal.payment" */
export enum KmealPaymentConstraint {
  PaymentPkey = "payment_pkey"
}
/** update columns of table "kmeal.payment" */
export enum KmealPaymentUpdateColumn {
  OrderId = "order_id",
  PaymentId = "payment_id",
  PaymentStatus = "payment_status"
}
/** unique or primary key constraints on table "kmeal.restaurant_group" */
export enum KmealRestaurantGroupConstraint {
  RestaurantGroupPkey = "restaurant_group_pkey"
}
/** update columns of table "kmeal.restaurant_group" */
export enum KmealRestaurantGroupUpdateColumn {
  GroupId = "group_id",
  GroupName = "group_name",
  MenuBook = "menu_book",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.restaurant" */
export enum KmealRestaurantConstraint {
  RestaurantPkey = "restaurant_pkey"
}
/** update columns of table "kmeal.restaurant" */
export enum KmealRestaurantUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  Address = "address",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  Description = "description",
  Isactive = "isactive",
  Latitude = "latitude",
  Location = "location",
  Logo = "logo",
  Longitude = "longitude",
  Name = "name",
  Owner = "owner",
  Phone = "phone",
  Rating = "rating",
  RestaurantId = "restaurant_id",
  Timeofoperation = "timeofoperation",
  YelpId = "yelp_id"
}
/** unique or primary key constraints on table "kmeal.dporder" */
export enum KmealDporderConstraint {
  DporderPkey = "dporder_pkey"
}
/** update columns of table "kmeal.dporder" */
export enum KmealDporderUpdateColumn {
  _DmxCreatedAt = "_dmx_created_at",
  BidPrice = "bid_price",
  Buyer = "buyer",
  CreatedAt = "created_at",
  CreatedBlock = "created_block",
  CreatedEosacc = "created_eosacc",
  CreatedTrx = "created_trx",
  DporderId = "dporder_id",
  Instructions = "instructions",
  ListingId = "listing_id",
  OrderId = "order_id",
  RestaurantId = "restaurant_id"
}
/** unique or primary key constraints on table "kmeal.categories" */
export enum KmealCategoriesConstraint {
  CategoriesPkey = "categories_pkey"
}
/** update columns of table "kmeal.categories" */
export enum KmealCategoriesUpdateColumn {
  Alias = "alias",
  Title = "title"
}
/** unique or primary key constraints on table "spatial_ref_sys" */
export enum SpatialRefSysConstraint {
  SpatialRefSysPkey = "spatial_ref_sys_pkey"
}
/** update columns of table "spatial_ref_sys" */
export enum SpatialRefSysUpdateColumn {
  AuthName = "auth_name",
  AuthSrid = "auth_srid",
  Proj4text = "proj4text",
  Srid = "srid",
  Srtext = "srtext"
}
/** unique or primary key constraints on table "topology.layer" */
export enum TopologyLayerConstraint {
  LayerPkey = "layer_pkey",
  LayerSchemaNameTableNameFeatureColumnKey = "layer_schema_name_table_name_feature_column_key"
}
/** update columns of table "topology.layer" */
export enum TopologyLayerUpdateColumn {
  ChildId = "child_id",
  FeatureColumn = "feature_column",
  FeatureType = "feature_type",
  LayerId = "layer_id",
  Level = "level",
  SchemaName = "schema_name",
  TableName = "table_name",
  TopologyId = "topology_id"
}
/** unique or primary key constraints on table "topology.topology" */
export enum TopologyTopologyConstraint {
  TopologyNameKey = "topology_name_key",
  TopologyPkey = "topology_pkey"
}
/** update columns of table "topology.topology" */
export enum TopologyTopologyUpdateColumn {
  Hasz = "hasz",
  Id = "id",
  Name = "name",
  Precision = "precision",
  Srid = "srid"
}

export type Name = any;

export type Bigint = any;

export type Timestamp = any;

export type Bpchar = any;

export type Numeric = any;

export type Float8 = any;

export type Geography = any;

export type Geometry = any;

export type _Float8 = any;

export type _Bool = any;

export type _Text = any;

// ====================================================
// Documents
// ====================================================

export namespace KmealCategories {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    kmeal_categories: KmealCategories[];
  };

  export type KmealCategories = {
    __typename?: "kmeal_categories";

    title: string;

    alias: string;
  };
}

export namespace GetRestaurantsNearBy {
  export type Variables = {
    nearby?: GetNearByInput | null;
  };

  export type Query = {
    __typename?: "Query";

    getRestaurantsNearby: (GetRestaurantsNearby | null)[] | null;
  };

  export type GetRestaurantsNearby = {
    __typename?: "Restaurant";

    address: string | null;

    description: string | null;

    distance: number | null;

    isactive: string | null;

    latitude: number | null;

    longitude: number | null;

    logo: string | null;

    name: string | null;

    owner: string | null;

    phone: string | null;

    restaurant_id: number;

    timeofoperation: string | null;

    yelp_id: number | null;

    rating: number | null;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class KmealCategoriesGQL extends Apollo.Query<KmealCategories.Query, KmealCategories.Variables> {
  document: any = gql`
    query kmeal_categories {
      kmeal_categories {
        title
        alias
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetRestaurantsNearByGQL extends Apollo.Query<GetRestaurantsNearBy.Query, GetRestaurantsNearBy.Variables> {
  document: any = gql`
    query getRestaurantsNearBy($nearby: GetNearByInput) {
      getRestaurantsNearby(nearby: $nearby) {
        address
        description
        distance
        isactive
        latitude
        longitude
        logo
        name
        owner
        phone
        restaurant_id
        timeofoperation
        yelp_id
        rating
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
