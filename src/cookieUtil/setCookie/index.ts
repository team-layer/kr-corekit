interface CookieOptions {
    path?: string;
    expires?: Date;
    maxAge?: number;
    afterExpires?: {
        year: string
        month: string
        day: string
        hour: string
        minute: string
        second: string
    }
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
}

export default function setCookie(
    name: string,
    value: string,
    options: CookieOptions = {}
): void {
    const {
        path = '/',
        expires,
        maxAge,
        afterExpires,
        domain,
        secure,
        sameSite
    } = options;

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path};`;

    if (expires) {
        cookieString += ` expires=${expires.toUTCString()};`;
    }

    if (maxAge) {
        cookieString += ` max-age=${maxAge};`;
    }

    if (afterExpires) {
        let scaledToMaxAge = 0;

        if (afterExpires.year) {
            scaledToMaxAge += parseInt(afterExpires.year, 10) * 365 * 24 * 60 * 60;
        } else if (afterExpires.month) {
            scaledToMaxAge += parseInt(afterExpires.month, 10) * 30 * 24 * 60 * 60;
        } else if (afterExpires.day) {
            scaledToMaxAge += parseInt(afterExpires.day, 10) * 24 * 60 * 60;
        } else if (afterExpires.hour) {
            scaledToMaxAge += parseInt(afterExpires.hour, 10) * 60 * 60;
        } else if (afterExpires.minute) {
            scaledToMaxAge += parseInt(afterExpires.minute, 10) * 60;
        } else if (afterExpires.second) {
            scaledToMaxAge += parseInt(afterExpires.second, 10);
        }
        cookieString += ` max-age=${scaledToMaxAge};`;
    }

    if (domain) {
        cookieString += ` domain=${domain};`;
    }

    if (secure) {
        cookieString += ' secure;';
    }

    if (sameSite) {
        cookieString += ` samesite=${sameSite};`;
    }

    document.cookie = cookieString;
}