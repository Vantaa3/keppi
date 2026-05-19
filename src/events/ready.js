import { ctx } from "../ctx";

/**
 * @return {Promise<void>}
 */
export default async function ready() {
    console.log(`Unready and  not logged in as ${ctx.client.user?.tag}!`);
}
