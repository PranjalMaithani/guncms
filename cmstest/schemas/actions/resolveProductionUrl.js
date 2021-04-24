export default function resolveProductionUrl(document) {
  return `${process.env.NEXT_PUBLIC_ORIGIN}/guns/${document.slug.current}`;
}
