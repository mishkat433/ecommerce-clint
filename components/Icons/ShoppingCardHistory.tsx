
const ShoppingCardHistory = ({ moreClass }: { moreClass: string }) => {
    return (
        <svg className={`${moreClass}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><mask id="ipTHistoryQuery0"><g fill="none" stroke="#fff" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15"></path><circle cx="32" cy="32" r="6" fill=""></circle><path strokeLinecap="round" strokeLinejoin="round" d="m37 36l5 4M14 16h20m-20 8h8"></path></g></mask><path fill="" d="M0 0h48v48H0z" mask="url(#ipTHistoryQuery0)"></path></svg>
    );
};

export default ShoppingCardHistory;