'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircleIcon } from "@/components/icons";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { useRouter } from "next/navigation";
import { DEPLOY_STRATEGY, DEPLOY_STRATEGY_ENUM, ROUTER } from "@/constants";

const DeployToken: React.FC = () => {
    const router = useRouter();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center">
                    <div>Deploy</div>
                    <div className="cursor-pointer flex flex-row text-custom-green text-lg items-center gap-1" onClick={() => { router.push(ROUTER.MY_TOKENS) }}>
                        <ArrowLeftIcon className="w-4 h-4" />
                        Go back to my tokens
                    </div>
                </CardTitle>
                <CardDescription>Deploy your meme token on Rootstock!</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-10 w-full mb-4">
                    <div className="w-auto">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="gasless">ERC20</label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{"Active this option for deploying ERC20 token."}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <label className="flex relative items-center cursor-pointer mt-2">
                            <input
                                type="checkbox"
                                className="sr-only"
                            />
                            <span className="w-11 h-6 bg-card rounded-full border border-input toggle-bg"></span>
                        </label>
                    </div>
                    <div className="w-auto">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="gasless">ERC1155</label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{"Active this option for deploying ERC1155 token."}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <label className="flex relative items-center cursor-pointer mt-2">
                            <input
                                type="checkbox"
                                className="sr-only"
                            />
                            <span className="w-11 h-6 bg-card rounded-full border border-input toggle-bg"></span>
                        </label>
                    </div>
                    <div className="w-auto">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="gasless">Gasless</label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{"Active this option if you don\'t have enough rBTC."}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <label className="flex relative items-center cursor-pointer mt-2">
                            <input
                                type="checkbox"
                                className="sr-only"
                            />
                            <span className="w-11 h-6 bg-card rounded-full border border-input toggle-bg"></span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-row gap-10 w-full">
                    <div className="w-full">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="strategy" className="block">
                                Strategy
                            </label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Select the strategy according your tokenomics strategy preference</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <select
                            name="strategy"
                            id="strategy"
                            className="mt-2 w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--card))] focus:border-gray-200 focus:outline-none"
                        >
                            <option value={DEPLOY_STRATEGY_ENUM.DEFLATIONARY}>{DEPLOY_STRATEGY.DEFLATIONARY.name}</option>
                            <option value={DEPLOY_STRATEGY_ENUM.INFLATIONARY}>{DEPLOY_STRATEGY.INFLATIONARY.name}</option>
                        </select>
                    </div>
                </div>
                <div className="my-4 flex flex-row gap-10">
                    <div className="w-full">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="name" className="block">
                                Name
                            </label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Enter the name of the ERC20 token.</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="mt-2 w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--card))] focus:border-gray-200 focus:outline-none"
                        />
                    </div>
                    <div className="w-full">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="symbol" className="block">
                                Symbol
                            </label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>
                                        Enter the symbol of the ERC20 token.
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <input
                            type="text"
                            name="symbol"
                            id="symbol"
                            className="mt-2 w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--card))] focus:border-gray-200 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="w-full mt-4 flex flex-row gap-10">
                    <div className="w-full">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="initialSupply" className="">
                                Initial Supply
                            </label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Enter the Initial Supply for the ERC20 token. It should be in decimal string. </p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <input
                            type="text"
                            name="initialSupply"
                            id="initialSupply"
                            className="mt-2 w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--card))] focus:border-gray-200 focus:outline-none"
                        />
                    </div>
                    <div className="w-full">
                        <div className="flex-row flex gap-2 items-center">
                            <label htmlFor="maxSupply" className="">
                                Max Supply
                            </label>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HelpCircleIcon className="w-4 h-4" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Enter the Max Supply for the ERC20 token. It should be in decimal string.</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <input
                            type="text"
                            name="maxSupply"
                            id="maxSupply"
                            className="mt-2 w-full px-3 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--card))] focus:border-gray-200 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex-row flex gap-2 items-center mb-2">
                        Memetoken logo
                        <Tooltip>
                            <TooltipTrigger>
                                <HelpCircleIcon className="w-4 h-4" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Select a PNG or JPG image for the ERC20 token.</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <div className="w-full flex flex-col pt-6 pb-4 justify-center items-center gap-6  border border-[hsl(var(--border))] rounded-md">
                        <div className="h-[200px] w-[200px]">
                            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-2xl">N/A</span>
                            </div>
                        </div>
                        <label
                            htmlFor="image"
                            className="w-[190px] py-2 flex items-center justify-center rounded-full font-bold bg-custom-cyan text-black cursor-pointer hover:opacity-70 transition"
                        >
                            Select a file...
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            accept="image/png, image/jpeg"
                            className="hidden"
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="px-8 relative justify-end mb-6">
                <button className="px-4 py-2 bg-custom-green text-white rounded-md">
                    Deploy Token
                </button>
            </CardFooter>
        </Card>
    )
}

export default DeployToken;