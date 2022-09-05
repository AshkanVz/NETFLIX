import React from 'react';

const Accordion = () => {

    const opening = () => {

    }
    return (
        <div className="  flex flex-col items-center justify-center">
             <h2 className='text-3xl text-center font-bold text-white mt-8 mb-12'>Frequently Asked Questions</h2>
        <div className="flex items-center justify-center  w-full mb-24  ">
            
        <div className="bg-slate-600 w-[75%]  rounded-3xl ">
       
            <div className="container  flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                
                <div className="space-y-4">
                    <details className="w-full rounded-lg ring-1 ring-purple-600 bg-slate-800">
                        <summary className="px-4 py-6 text-white cursor-pointer ">
                            What is Netflix ? 
                        </summary>
                        <hr/>
                        <p className="px-4 py-6 pt-0 ml-4 mt-4 text-white">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discove
                        </p>
                    </details>
                    <details className="w-full rounded-lg ring-1 ring-purple-600 bg-slate-800">
                        <summary className="px-4 py-6 text-white cursor-pointer">
                          How much does Netflix cost ?
                        </summary>
                        <hr/>
                        <p className="px-4 py-6 pt-0 ml-4 mt-4 text-white">
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.
                        </p>
                    </details>
                    <details className="w-full rounded-lg ring-1 ring-purple-600 bg-slate-800">
                        <summary className="px-4 py-6 text-white cursor-pointer">
                        where can I watch ?
                        </summary>
                        <hr/>
                        <p className="px-4 py-6 pt-0 ml-4 mt-4 text-white">
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </p>
                    </details>
                    <details className="w-full rounded-lg ring-1 ring-purple-600 bg-slate-800">
                        <summary className="px-4 py-6 text-white cursor-pointer">
                         How do I cancel ?
                        </summary>
                        <hr/>
                        <p className="px-4 py-6 pt-0 ml-4 mt-4 text-white">
                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </p>
                    </details>
                    <details className="w-full rounded-lg ring-1 ring-purple-600 bg-slate-800">
                        <summary className="px-4 py-6 text-white cursor-pointer">
                          What can I watch on netflix ?
                        </summary>
                        <hr/>
                        <p className="px-4 py-6 pt-0 ml-4 mt-4 text-white">
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Accordion;