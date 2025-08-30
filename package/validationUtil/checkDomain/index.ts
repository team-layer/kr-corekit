export default function checkDomain(domain: string): boolean {
  const domainRegex = /^(?!:\/\/)([a-z0-9-]+\.)+[a-z]{2,}$/;
  return domainRegex.test(domain);
}
