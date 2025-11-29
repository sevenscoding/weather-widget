export function getTempShadow(temp) {
    if (temp == null)
        return 'none';
    if (temp <= 0)
        return '0 0 16px rgba(74,144,226,0.7)';
    if (temp <= 10)
        return '0 0 16px  rgba(126,182,255,0.7)';
    if (temp <= 18)
        return '0 0 16px  rgba(164,200,255,0.6)';
    if (temp <= 24)
        return '0 0 16px  rgba(255,193,7,0.6)';
    if (temp <= 32)
        return '0 0 16px  rgba(244,93,1,0.7)';
    return '0 0 16px  rgba(216,58,46,0.7)';
}
