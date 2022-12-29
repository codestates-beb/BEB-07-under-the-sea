import Erc721 from "./Erc721";

function TokenList({ account, erc721list }) {
    return (
        <div className="tokenlist">
            <Erc721 account={account} erc721list={erc721list} />
        </div>
    );
}

export default TokenList;