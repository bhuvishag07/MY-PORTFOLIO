import { useState } from 'react';

export function useLoader() {
    const [loading, setLoading] = useState(true);
    const completeLoading = () => setLoading(false);
    return { loading, completeLoading };
}
