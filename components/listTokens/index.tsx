'use client'
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"
import { CopyIcon } from "@/components/icons";


const ListTokens: React.FC = () => {
    return (
        <table className="min-w-full bg-background border-b border-border rounded-lg shadow-md">
            <thead className="bg-border">
                <tr>
                    <th className="py-3 px-4 text-left font-semibold">Logo</th>
                    <th className="py-3 px-4 text-left font-semibold">Name</th>
                    <th className="py-3 px-4 text-center font-semibold">Symbol</th>
                    <th className="py-3 px-4 text-center font-semibold">Address</th>
                    <th className="py-3 px-4 text-center font-semibold">Current supply</th>
                    <th className="py-3 px-4 text-center font-semibold">Strategy</th>
                    <th className="py-3 px-4 text-center font-semibold">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b hover:bg-card hover:text-custom-pink transition-colors">
                    <td className="py-3 px-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm">N/A</span>
                        </div>
                    </td>
                    <td className="py-3 px-4">Sample Token</td>
                    <td className="py-3 px-4 text-center">SMPL</td>
                    <td className="py-3 px-4 my-3 flex justify-center items-center gap-3">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold"
                        >
                            0x1234...5678
                        </a>
                        <Tooltip>
                            <TooltipTrigger>
                                <CopyIcon className="w-5 h-5 hover:text-white cursor-pointer" />
                            </TooltipTrigger>
                        </Tooltip>
                    </td>
                    <td className="py-3 px-4 text-center">1,000,000</td>
                    <td className="text-center">
                        <div className="bg-custom-cyan font-bold text-background py-1 rounded-full">
                            erc20 deflationary
                        </div>
                    </td>
                    <td className="py-3 px-4 items-center text-center">
                        <button className="px-4 py-2 bg-custom-green text-white rounded-md">
                            Mint
                        </button>
                    </td>
                </tr>
                <tr className="border-b hover:bg-card hover:text-custom-pink transition-colors">
                    <td className="py-3 px-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm">N/A</span>
                        </div>
                    </td>
                    <td className="py-3 px-4">Another Token</td>
                    <td className="py-3 px-4 text-center">ANT</td>
                    <td className="py-3 px-4 my-3 flex justify-center items-center gap-3">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold"
                        >
                            0x8765...4321
                        </a>
                        <Tooltip>
                            <TooltipTrigger>
                                <CopyIcon className="w-5 h-5 hover:text-white cursor-pointer" />
                            </TooltipTrigger>
                        </Tooltip>
                    </td>
                    <td className="py-3 px-4 text-center">500,000</td>
                    <td className="text-center">
                        <div className="bg-custom-orange font-bold text-background py-1 rounded-full">
                            erc20 inflationary
                        </div>
                    </td>
                    <td className="py-3 px-4 items-center text-center">
                        <button className="px-4 py-2 bg-custom-green text-white rounded-md">
                            Mint
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ListTokens;