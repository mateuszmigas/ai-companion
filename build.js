const args = process.argv.slice(2);
import { context, build } from 'esbuild';

const configs = [
    {
        entryPoint: 'src/flyout/index.tsx',
        outfile: 'extension/flyout.js',
    },
    {
        entryPoint: 'src/contentScript.tsx',
        outfile: 'extension/contentScript.js',
    },
];

configs.forEach(config => {
    const esbuildConfig = {
        entryPoints: [config.entryPoint],
        outfile: config.outfile,
        bundle: true,
        minify: args.includes('prod'),
    };

    args.includes('watch') ? context(esbuildConfig).then(c => c.watch()) : build(esbuildConfig);
});
