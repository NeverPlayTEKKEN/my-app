'use client'

import Link from "next/link";
import Image from "next/image";
import { HomeIcon, MagnifyingGlassIcon, PencilSquareIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Helpdesk = () => {
    return (
        <div className="bg-gray-100 h-screen flex flex-col">
            <Header />
            <div className='grow flex'>
                <Sidebar />
                <div className='pt-6 pr-4 w-full'>
                    <div className="bg-white w-full flex-col flex items-center h-[595px] border">
                        <div className="w-full flex justify-start py-2 pl-5 font-bold">依頼一覧（過去５営業日分）</div>
                        <div className="w-full flex justify-start pl-5 my-4 border-b">
                            <div className="mr-4 border-b-2 border-blue-700 text-blue-700">起票した依頼</div>
                            <div>担当チーム宛の依頼</div>
                        </div>
                        <Image src='/キャプチャ.PNG' width={1260} height={720} alt=''/>
                    </div>
                </div>
            </div>
            <div className='mb-2 text-xs text-blue-900 w-full flex justify-center'>© Copyright2025 こくみん共済 coop ＜全労済＞</div>
        </div>
    )
}
export default Helpdesk;

const Header = () => {
    return (
        <div className="w-full bg-white h-12 shadow-md flex items-center">
            <div className="w-full text-blue-900 font-bold px-4">ヘルプデスクシステム</div>
            <div className="w-full flex justify-end mr-2">
                <Link href='./' className="text-xs w-14 flex flex-col items-center text-blue-900"><HomeIcon className='w-5 h-5' />ホーム</Link>
                <Link href='./' className="text-xs w-14 flex flex-col items-center text-blue-900"><MagnifyingGlassIcon className='w-5 h-5' />検索</Link>
                <Link href='./' className="text-xs w-14 flex flex-col items-center text-blue-900"><PencilSquareIcon className='h-5 w-5' />新規作成</Link>
                <Link href='./' className="text-xs w-14 flex flex-col items-center text-blue-900"><UserCircleIcon className='h-5 w-5' />メニュー</Link>
            </div>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className='h-full w-1/6 pt-6'>
            <div className='bg-white mx-2 h-[595px] p-4 border'>
                <button className='flex items-center justify-center border-2 w-full mb-4 rounded py-2 shadow-md hover:bg-blue-100'><PencilSquareIcon className='h-6 w-6 text-blue-900' />各種申請</button>
                <button className='flex items-center justify-center border-2 w-full mb-4 rounded py-2 shadow-md hover:bg-blue-100'><PencilSquareIcon className='h-6 w-6 text-blue-900' />特別処理依頼</button>
                <button className='flex items-center justify-center border-2 w-full rounded py-2 shadow-md hover:bg-blue-100'><MagnifyingGlassIcon className='h-6 w-6 text-blue-900' />検索</button>
            </div>
        </div>
    )
}