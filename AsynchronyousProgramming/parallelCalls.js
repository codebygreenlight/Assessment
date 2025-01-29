// Simulate fetching data from URLs with different response times
function fetchFromUrl(url) {
    return new Promise((resolve, reject) => {
        // Simulate random response time between 1-3 seconds
        const responseTime = Math.floor(Math.random() * 2000) + 1000;
        
        setTimeout(() => {
            // Simulate different responses based on URL
            const responses = {
                'api/users': { type: 'users', data: ['John', 'Jane', 'Bob'] },
                'api/products': { type: 'products', data: ['Phone', 'Laptop', 'Tablet'] },
                'api/orders': { type: 'orders', data: [
                    { id: 1, product: 'Phone', quantity: 2 },
                    { id: 2, product: 'Laptop', quantity: 1 }
                ]},
                'api/reviews': { type: 'reviews', data: [
                    { user: 'John', rating: 5, text: 'Great!' },
                    { user: 'Jane', rating: 4, text: 'Good product' }
                ]}
            };

            const endpoint = url.split('/').slice(-1)[0];
            const response = responses[url];
            
            if (response) {
                console.log(`Received response from ${url} after ${responseTime}ms`);
                resolve(response);
            } else {
                reject(new Error(`Failed to fetch data from ${url}`));
            }
        }, responseTime);
    });
}

// Function to handle parallel API calls
async function parallelCalls(urls) {
    try {
        console.log('Starting parallel requests to:', urls);
        console.log('Waiting for all responses...\n');

        const startTime = Date.now();
        
        // Make parallel API calls
        const responses = await Promise.all(
            urls.map(url => fetchFromUrl(url))
        );

        const endTime = Date.now();
        const totalTime = endTime - startTime;

        // Log results
        console.log('\nAll responses received!');
        console.log('Total time taken:', totalTime, 'ms');
        console.log('\nResponses:', JSON.stringify(responses, null, 2));
        
        return responses;
    } catch (error) {
        console.error('Error in parallel calls:', error.message);
        throw error;
    }
}

// Test the parallel calls
async function runTests() {
    try {
        // Test with multiple valid URLs
        console.log('Test 1: Fetching from multiple endpoints');
        const urls = [
            'api/users',
            'api/products',
            'api/orders',
            'api/reviews'
        ];
        await parallelCalls(urls);

        // Test with some invalid URLs
        console.log('\nTest 2: Testing with invalid endpoints');
        const invalidUrls = [
            'api/users',
            'api/invalid',
            'api/products'
        ];
        await parallelCalls(invalidUrls);

    } catch (error) {
        console.log('Test completed with expected error');
    }
}

// Run the tests
runTests(); 