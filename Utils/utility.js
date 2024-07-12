import crypto from 'crypto';

export const generatePatientID = () => {
    return crypto.randomUUID().toString();
}