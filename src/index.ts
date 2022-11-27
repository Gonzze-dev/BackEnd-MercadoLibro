import server from "./server";
import { AppDataSource } from "./Connection/Connection";

const puerto = 3000;

const main = () =>
{
    try
    {
        AppDataSource.initialize();
        server.listen(puerto);
        console.log(`server on http://localhost:${puerto}/graphql`);
    }
    catch(err)
    {
        console.error(err);
    }
}

main();
