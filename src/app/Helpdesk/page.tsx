'use client'

import Link from "next/link";
import Image from "next/image";
import { HomeIcon, MagnifyingGlassIcon, PencilSquareIcon, UserCircleIcon, PencilIcon } from '@heroicons/react/24/solid';

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
                        <div className="w-full h-full pb-4 px-6">
                            <div className="h-[440px] w-full border overflow-y-scroll">
                                <div className="bg-gray-200 h-10 border">
                                </div>
                                <div>
                                {iraiList.map((item, index:number)=>{
                                        return(<OneList id={item.id} subject={item.subject} base={item.base} name={item.name} urgent={item.urgent} expected_date={item.expected_date} team={item.team} />)
                                    })}
                                </div>
                            </div>
                        </div>
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

const OneList = (props: IraiObject) => {

    return (
        <div className="grid grid-cols-12 items-center justify-center border">
            <button className="h-10 w-10 rounded-md border-2 border-blue-400 p-1 flex items-center justify-center"><PencilIcon className="h-6 w-6 text-blue-400"/></button>
            <div className="text-xs">{props.id}</div>
            <div className="text-xs col-span-3">{props.subject}</div>
            <div className="text-xs col-span-2">{props.base}</div>
            <div className="text-xs">{props.name}</div>
            <div className="text-xs">{props.urgent}</div>
            <div className="text-xs">{props.expected_date.toISOString()}</div>
            <div className="text-xs col-span-2">{props.team}</div>
        </div>
    )
}

interface IraiObject {
    id: string;
    subject: string;
    base: string;
    name: string;
    urgent: boolean;
    expected_date: Date;
    team: string;
}

const iraiList: IraiObject[] = [
    {
        id: "0000000001",
        subject: "ユーザーアカウント利用申請書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-28'),
        team: "パスワードクリア ホスト接続, パスワードクリア インターネット"
    },
    {
        id: "0000000002",
        subject: "ネットワークログインパスワード初期化依頼書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: true,
        expected_date: new Date('2024-09-03'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000003",
        subject: "ユーザーアカウント利用申請書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-03'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000004",
        subject: "ネットワークログインパスワード初期化依頼書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: true,
        expected_date: new Date('2024-09-10'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000005",
        subject: "型テーブル登録届フォーマット",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-25'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000006",
        subject: "ユーザーアカウント利用申請書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: true,
        expected_date: new Date('2024-09-02'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000007",
        subject: "型テーブル登録届フォーマット",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-26'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000008",
        subject: "ユーザーアカウント利用申請書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-13'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000009",
        subject: "ネットワークログインパスワード初期化依頼書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-11'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000010",
        subject: "ネットワークログインパスワード初期化依頼書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-11'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000011",
        subject: "ネットワークログインパスワード初期化依頼書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-11'),
        team: "パスワードクリア ホスト接続, パスワードクリア インターネット, パスワードクリア 分析ツール, パスワードクリア 秘文"
    },
    {
        id: "0000000012",
        subject: "ネットワークログインパスワード初期化依頼書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-12'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000013",
        subject: "ネットワークログインパスワード初期化依頼書",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-30'),
        team: "パスワードクリア ホスト接続"
    },
    {
        id: "0000000014",
        subject: "型テーブル登録届フォーマット",
        base: "東京事務センター",
        name: "共済 太郎",
        urgent: false,
        expected_date: new Date('2024-09-27'),
        team: "パスワードクリア ホスト接続"
    }
];
