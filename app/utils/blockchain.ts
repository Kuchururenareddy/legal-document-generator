import SHA256 from 'crypto-js/sha256';

export const generateDocumentHash = (content: string) => {
  // Creates a unique 64-character fingerprint of your legal draft
  return SHA256(content).toString();
};

export const verifyDocument = (content: string, originalHash: string) => {
  const currentHash = generateDocumentHash(content);
  return currentHash === originalHash;
};