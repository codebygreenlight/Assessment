// Simulate API endpoint that returns user data
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate API delay
        setTimeout(() => {
            // Simulate user data
            const users = {
                1: { id: 1, name: 'John Doe', email: 'john@example.com' },
                2: { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
                3: { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
            };

            const user = users[userId];
            
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 2000); // 2 second delay
    });
}

// Async function to handle the API call
async function awaitCall(userId) {
    try {
        console.log('Fetching user data...');
        const userData = await fetchUserData(userId);
        console.log('User data received:', userData);
        return userData;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error;
    }
}

// Test the async function
async function runTests() {
    try {
        // Test with existing user
        console.log('\nTest 1: Fetching existing user');
        await awaitCall(1);

        // Test with another existing user
        console.log('\nTest 2: Fetching another user');
        await awaitCall(2);

        // Test with non-existent user
        console.log('\nTest 3: Fetching non-existent user');
        await awaitCall(4);
    } catch (error) {
        console.log('Test completed with expected error');
    }
}

// Run the tests
runTests(); 