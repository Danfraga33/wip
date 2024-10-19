'use client';
import { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';
import {
	IconArrowLeft,
	IconArrowUpRightCircle,
	IconChartAreaFilled,
	IconUserCheck,
	IconUserPlus,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';
import { Link } from '@remix-run/react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from './table';
import { Badge } from './badge';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { Area, AreaChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart';
import projectRevenueData from '~/utils/projectRevenueData.json';

export function SidebarComponent() {
	const links = [
		{
			label: 'Customers',
			href: '/Customers',
			icon: (
				<IconUserCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: 'Marketing Insights',
			href: '/Marketing',
			icon: (
				<IconChartAreaFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
		{
			label: 'Logout',
			href: '/',
			icon: (
				<IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
			),
		},
	];
	const [open, setOpen] = useState(false);
	return (
		<div
			className={cn(
				'rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-screen flex-1 max-   w-screen-9xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden',
				'h-screen' // for your use case, use `h-screen` instead of `h-[60vh]`
			)}
		>
			<Sidebar open={open} setOpen={setOpen} animate={true}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
						<>
							<Logo />
						</>
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>

					<div>
						<SidebarLink
							link={{
								label: 'Daniel Fraga',
								href: '/',
								icon: (
									<img
										src=""
										className="h-7 w-7 flex-shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>
			<Dashboard />
		</div>
	);
}
export const Logo = () => {
	return (
		<Link
			to="/dashboard"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium text-black dark:text-white whitespace-pre"
			>
				Automation
			</motion.span>
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			to="#"
			className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
		>
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
		</Link>
	);
};

// Dummy dashboard component with content
const Dashboard = () => {
	const statInfo = [
		{
			title: 'QR Codes Scanned',
			description: 'lorem',
		},
		{
			title: 'QR Codes Redeemed',
			description: 'lorem',
			custom: 'Porformance',
		},
		{
			title: 'Performance',
			description: 'Redeemed/Scanned',
		},

		{ title: 'Revenue', description: 'lorem' },
		{ title: 'Revenue Growth', description: 'lorem' },
	];

	const informationalData = [
		{ title: 'Customer Base', description: 'lorem', href: 'Customers' },
		{
			title: 'Marketing Insights (Notifications)',
			description: 'lorem',
			href: 'Marketing',
		},
	];
	return (
		<>
			<div className="flex flex-1">
				<div className="p-4 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex md:flex-col gap-2 flex-1 h-full">
					<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
						Dashboard
					</h2>
					<div className="flex gap-2 sm:flex-row flex-col overflow-scroll ">
						{statInfo.map((dataPoint, i) => (
							<Card
								key={'first' + i}
								className="max-h-full md:h-30 w-full rounded-lg border border-black bg-gray-100 dark:bg-neutral-800 "
							>
								<CardHeader className="flex items-center justify-start space-y-0 overflow-hidden">
									<CardTitle className="text-xs md:text-sm font-medium">
										{dataPoint.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-col justify-start items-center">
									<div className="text-md md:text-xl font-bold">$45,231</div>
									<p className="text-xs text-muted-foreground ">222</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="hidden md:flex gap-2 flex-1">
						{informationalData.map((data, i) => (
							<div
								key={'second' + i}
								className="max-h-full h-fit w-full rounded-lg border border-black bg-gray-100 dark:bg-neutral-800  overflow-hidden"
							>
								<Card className="xl:col-span-2">
									<CardHeader className="flex flex-row items-center">
										<div className="grid gap-2">
											<CardTitle>{data.title}</CardTitle>
											<CardDescription>{data.description}</CardDescription>
										</div>
										<Button asChild size="sm" className="ml-auto gap-1">
											<Link to={`/${data.href}`}>
												View All
												<EyeOpenIcon className="h-4 w-4" />
											</Link>
										</Button>
									</CardHeader>
									<CardContent>
										<Table>
											<TableHeader>
												<TableRow>
													<TableHead>Customer</TableHead>
													<TableHead>Date</TableHead>
													<TableHead className="text-right">Amount</TableHead>
												</TableRow>
											</TableHeader>
											<TableBody>
												<TableRow className="max-h-fit">
													<TableCell>
														<div className="font-medium">Liam Johnson</div>
														<div className="hidden text-sm text-muted-foreground md:inline">
															liam@example.com
														</div>
													</TableCell>

													<TableCell>{new Date().toISOString()}</TableCell>
													<TableCell className=" text-right">
														<Checkbox />
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
					<Card className="border max-h-96 w-full">
						<ChartContainer
							className="h-full w-full"
							config={{
								sales: {
									label: 'Sales',
									color: 'hsl(var(--chart-2))',
								},
							}}
						>
							<AreaChart
								accessibilityLayer
								data={projectRevenueData}
								margin={{
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
								}}
							>
								<XAxis dataKey="date" hide />
								<YAxis domain={['dataMin - 5', 'dataMax + 2']} hide />
								<defs>
									<linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
										<stop
											offset="5%"
											stopColor="var(--color-time)"
											stopOpacity={0.8}
										/>
										<stop
											offset="95%"
											stopColor="var(--color-time)"
											stopOpacity={0.1}
										/>
									</linearGradient>
								</defs>
								<Area
									dataKey="sales"
									type="natural"
									fill="url(#fillTime)"
									fillOpacity={0.4}
									stroke="var(--color-time)"
								/>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent hideLabel />}
									formatter={(value) => (
										<div className="flex w-full items-center text-xs text-muted-foreground">
											Sales
											<div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
												<span className="font-normal text-muted-foreground">
													$
												</span>
												{value}
											</div>
										</div>
									)}
								/>
							</AreaChart>
						</ChartContainer>
					</Card>
				</div>
			</div>
		</>
	);
};
