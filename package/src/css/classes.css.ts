import {table} from '../components/Table/index.css.ts';

/**
 * The `classes` object exposes reusable TinyWidgets CSS classes so they can be
 * applied to markup rendered by other libraries.
 *
 * The current members are:
 * - `table`
 *
 * @example
 * ```tsx
 * <table className={classes.table}>
 *   <thead>
 *     <tr>
 *       <th>Name</th>
 *       <th>Species</th>
 *       <th>Color</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>Fido</td>
 *       <td>Dog</td>
 *       <td>Brown</td>
 *     </tr>
 *     <tr>
 *       <td>Felix</td>
 *       <td>Cat</td>
 *       <td>Black</td>
 *     </tr>
 *     <tr>
 *       <td>Cujo</td>
 *       <td>Wolf</td>
 *       <td>Gray</td>
 *     </tr>
 *   </tbody>
 * </table>
 * ```
 * This example applies the TinyWidgets table style to existing table markup.
 * @icon Lucide.Shapes
 */
export const classes = {table};
