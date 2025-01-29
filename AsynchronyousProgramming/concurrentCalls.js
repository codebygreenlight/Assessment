// Simulate API endpoints that return different types of data
function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const profiles = {
                1: { id: 1, name: 'John Doe', age: 30 },
                2: { id: 2, name: 'Jane Smith', age: 25 }
            };
            
            const profile = profiles[userId];
            if (profile) {
                resolve(profile);
            } else {
                reject(new Error('Profile not found'));
            }
        }, 2000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = {
                1: [
                    { id: 1, title: 'First Post', content: 'Hello World' },
                    { id: 2, title: 'Second Post', content: 'Hello Again' }
                ],
                2: [
                    { id: 3, title: 'My Story', content: 'Once upon a time' },
                    { id: 4, title: 'Another Day', content: 'What a day!' }
                ]
            };
            
            const userPosts = posts[userId];
            if (userPosts) {
                resolve(userPosts);
            } else {
                reject(new Error('Posts not found'));
            }
        }, 1500);
    });
}

// Async function to handle concurrent API calls
async function concurrentRequests(userId) {
    try {
        console.log(`Fetching data for user ${userId}...`);
        
        // Make concurrent API calls
        const [profile, posts] = await Promise.all([
            fetchUserProfile(userId),
            fetchUserPosts(userId)
        ]);

        // Combine the results
        const userData = {
            profile,
            posts
        };

        console.log('All data received:', userData);
        return userData;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

// Test the concurrent requests
async function runTests() {
    try {
        // Test with existing user
        console.log('\nTest 1: Fetching data for existing user');
        await concurrentRequests(1);

        // Test with another existing user
        console.log('\nTest 2: Fetching data for another user');
        await concurrentRequests(2);

        // Test with non-existent user
        console.log('\nTest 3: Fetching data for non-existent user');
        await concurrentRequests(3);
    } catch (error) {
        console.log('Test completed with expected error');
    }
}

// Run the tests
runTests(); 