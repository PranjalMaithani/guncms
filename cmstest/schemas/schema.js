// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

//Documents
import gun from './gun';
import caliber from './caliber';
import country from './country';

//Objects
import category from './objects/category';
import variant from './objects/colorVariant';
import stats from './objects/stats';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([gun, caliber, country, category, variant, stats]),
});
