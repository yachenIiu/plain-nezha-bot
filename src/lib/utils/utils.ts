export function buildUrl(path: string, data?: any): string {
	if (!data) return path;
	const url = new URL(path);
	for (const key in data) {
		url.searchParams.append(key, data[key]);
	}
	return url.toString();
}

export const nezhaUtils = {
	isOffline: (lastActive: string) => {
		const date = new Date(lastActive);
		const now = new Date();

		const state = (now.getTime() - date.getTime()) / 1000 > 600 ? true : false;
		return state;
	},
	formatBytes: (bytes: number) => {
		if (bytes === 0 || isNaN(bytes)) return '0B';
		const k = 1024;
		const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + sizes[i];
	},
	formatUsage: (used: number, total: number) => {
		const result = (used / total) * 100;
		return isNaN(result) ? '0' : result.toFixed(2);
	},
	convertSecondsToDays: (seconds: number) => {
		const secondsInADay = 24 * 60 * 60;
		return Math.ceil(seconds / secondsInADay);
	},
};

export function getFlagEmoji(countryCode?: string) {
	if (!countryCode) return '❔️';

	return countryCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}
