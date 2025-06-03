export class TimeUtils {
	private timeZone: string;
	private locale: string;

	constructor({ timeZone, locale }: { timeZone: string; locale: string }) {
		this.timeZone = timeZone;
		this.locale = locale;
	}

	updateTimezoneLocale(tz: string, locale: string) {
		this.timeZone = tz;
		this.locale = locale;
	}

	dateStr(value?: string | number | Date): string {
		return (value ? new Date(value) : new Date()).toLocaleString(this.locale, { timeZone: this.timeZone });
	}
}

export default new TimeUtils({ timeZone: 'UTC', locale: 'en-US' });
