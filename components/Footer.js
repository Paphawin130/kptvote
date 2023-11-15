export const FooterComponent = () => {
    return (
        <>
            <div className="mx-auto container flex flex-col sm:flex-row justify-between py-4 px-4 gap-1 sm:gap-0 text-sm sm:text-base whitespace-nowrap 2xl:px-0">
                <footer className="p-6 bg-white/5 text-sm sm:text-base flex flex-col md:flex-row md:justify-between text-black page-footer  font-small blue pt-4 text-light">
                    <div className="footer-copyright text-center py-3">
                        <p className="text-center sm:text-left text-black/100">Made with ❤️ Powered by Coding Club</p>
                    </div>
                </footer>
            </div>
        </>
    );
};
