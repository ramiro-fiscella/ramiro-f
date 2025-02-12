import { defineConfig } from 'astro/config';

export default defineConfig({
  locals: (request) => {
    const lang = request.headers['accept-language']
      ?.split(',')[0]
      .startsWith('es')
      ? 'es'
      : 'en';
    return { lang };
  },
});
