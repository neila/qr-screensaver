import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { SS } from "../components/screensaver";

interface Props {
    value: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    return {
        props: {
        value:
            (context.query?.value as string) || "https://twitter.com/shofosho",
        },
    };
};

const Home: NextPage<Props> = ({ value }) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setReady(true);
    }, []);

    return (
        <>
        <Head>
            <meta charSet="UTF-8" />
            <title>blah</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@shofsosho" />
            <meta name="twitter:creator" content="@shofosho" />
            <meta name="twitter:title" content="QR screensaver" />
            <meta name="twitter:description" content="Generate a custom QR code screensaver!" />
            <meta name="twitter:image" content={`https://qr-screensaver.vercel.app/api/card?value=${value}`} />
        </Head>

        {ready && <SS value={value} />}
        </>
    );
};

export default Home;