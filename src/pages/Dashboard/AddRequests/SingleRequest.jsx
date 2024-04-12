

const SingleRequest = () => {
    return (
        <div className="flex p-5 bg-slate-200 gap-5 rounded-lg">
            <img className="w-20 h-20 rounded-lg" src="https://s.yimg.com/ny/api/res/1.2/iI6z6kzQvc4KfIdBOLGAtw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/e93f5290-007c-11ee-9bfa-557a0c9138fb" alt="" />
            <div className="flex flex-col h-full gap-1">
                <p className="font-bold">Alamin Rahim</p>
                <p className="text-xs font-semibold text-gray-400">email1025.com</p>
                {/* accept and decline buttons */}
                <div className="flex gap-5 font-semibold">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-1 rounded-md">Accept</button>
                    <button className="hover:bg-red-500 hover:border-red-500 border border-gray-500 text-gray-600 hover:text-white px-5 py-1 rounded-md">Decline</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRequest;