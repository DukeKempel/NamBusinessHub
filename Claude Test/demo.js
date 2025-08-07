// Business Specials Hub - Demo Version
class BusinessSpecialsDemo {
    constructor() {
        this.currentSpecial = null;
        this.specials = [
            {
                id: '1',
                title: 'Pizza Hut Namibia - 50% Off Tuesdays',
                description: 'Every Tuesday, enjoy our delicious pizzas at half price! Perfect for family dinner or a quick lunch. Valid at all Pizza Hut locations in Namibia.',
                price: 'N$ 99.99',
                category: 'food',
                photoUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
                createdAt: new Date(Date.now() - 86400000).toISOString(),
                views: 45,
                shares: 12,
                status: 'active'
            },
            {
                id: '2',
                title: 'Cafe Zoo - Free Coffee with Any Purchase',
                description: 'Start your day right at Cafe Zoo! Get a free coffee with any purchase over N$ 50. Valid all day long at our Windhoek location.',
                price: 'Free',
                category: 'food',
                photoUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
                createdAt: new Date(Date.now() - 172800000).toISOString(),
                views: 78,
                shares: 23,
                status: 'active'
            },
            {
                id: '3',
                title: 'Namibia Wildlife Resorts - Safari Special',
                description: 'Experience the beauty of Namibia with NWR! Book your safari tour and save 25% this month. Visit Etosha, Sossusvlei, and more.',
                price: 'N$ 1,500',
                category: 'tourism',
                photoUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
                createdAt: new Date(Date.now() - 259200000).toISOString(),
                views: 33,
                shares: 7,
                status: 'active'
            },
            {
                id: '4',
                title: 'Pick n Pay - Fresh Produce Sale',
                description: 'Fresh fruits and vegetables at unbeatable prices! This week only at all Pick n Pay stores across Namibia.',
                price: 'N$ 89.99',
                category: 'retail',
                photoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop',
                createdAt: new Date(Date.now() - 345600000).toISOString(),
                views: 28,
                shares: 5,
                status: 'active'
            },
            {
                id: '5',
                title: 'Namibia Breweries - Castle Lager Promotion',
                description: 'Buy 2 Castle Lager 6-packs and get 1 free! Available at all leading retailers and bars across Namibia.',
                price: 'N$ 120',
                category: 'food',
                photoUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
                createdAt: new Date(Date.now() - 432000000).toISOString(),
                views: 156,
                shares: 34,
                status: 'active'
            },
            {
                id: '6',
                title: 'MTC Namibia - Data Bundle Special',
                description: 'Double your data! Get 2GB for the price of 1GB. Valid for all MTC prepaid and contract customers.',
                price: 'N$ 50',
                category: 'service',
                photoUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
                createdAt: new Date(Date.now() - 518400000).toISOString(),
                views: 89,
                shares: 18,
                status: 'active'
            }
        ];
        this.subscribers = [
            { id: '1', email: 'john@example.com', subscribedAt: new Date(Date.now() - 604800000).toISOString() },
            { id: '2', email: 'sarah@example.com', subscribedAt: new Date(Date.now() - 1209600000).toISOString() },
            { id: '3', email: 'mike@example.com', subscribedAt: new Date(Date.now() - 1814400000).toISOString() },
            { id: '4', email: 'lisa@example.com', subscribedAt: new Date(Date.now() - 2419200000).toISOString() },
            { id: '5', email: 'david@example.com', subscribedAt: new Date(Date.now() - 3024000000).toISOString() }
        ];

        this.suppliers = [
            {
                id: '1',
                name: 'Namibia Breweries Limited',
                category: 'food',
                description: 'Leading beverage manufacturer in Namibia, producing Castle Lager, Windhoek Lager, and other popular brands.',
                phone: '+264 61 320 2999',
                email: 'info@nbl.com.na',
                location: 'Windhoek, Namibia',
                website: 'https://www.nbl.com.na',
                rating: 4.5,
                ratingCount: 23,
                createdAt: new Date(Date.now() - 604800000).toISOString()
            },
            {
                id: '2',
                name: 'Pick n Pay Namibia',
                category: 'retail',
                description: 'Major retail chain offering groceries, household items, and fresh produce across Namibia.',
                phone: '+264 61 299 9111',
                email: 'customerservice@pnp.com.na',
                location: 'Windhoek, Namibia',
                website: 'https://www.pnp.com.na',
                rating: 4.2,
                ratingCount: 45,
                createdAt: new Date(Date.now() - 1209600000).toISOString()
            },
            {
                id: '3',
                name: 'Namibia Wildlife Resorts',
                category: 'tourism',
                description: 'Premier tourism operator managing national parks and lodges including Etosha, Sossusvlei, and more.',
                phone: '+264 61 285 7200',
                email: 'reservations@nwr.com.na',
                location: 'Windhoek, Namibia',
                website: 'https://www.nwr.com.na',
                rating: 4.8,
                ratingCount: 67,
                createdAt: new Date(Date.now() - 1814400000).toISOString()
            },
            {
                id: '4',
                name: 'MTC Namibia',
                category: 'service',
                description: 'Leading telecommunications provider offering mobile, internet, and digital services across Namibia.',
                phone: '+264 61 911 911',
                email: 'customercare@mtc.com.na',
                location: 'Windhoek, Namibia',
                website: 'https://www.mtc.com.na',
                rating: 3.9,
                ratingCount: 89,
                createdAt: new Date(Date.now() - 2419200000).toISOString()
            },
            {
                id: '5',
                name: 'Namibia Dairies',
                category: 'food',
                description: 'Leading dairy products manufacturer supplying milk, cheese, yogurt, and other dairy products.',
                phone: '+264 61 207 9111',
                email: 'info@namibiadairies.com.na',
                location: 'Windhoek, Namibia',
                website: 'https://www.namibiadairies.com.na',
                rating: 4.3,
                ratingCount: 34,
                createdAt: new Date(Date.now() - 3024000000).toISOString()
            },
            {
                id: '6',
                name: 'Namibia Transport & Logistics',
                category: 'transport',
                description: 'Comprehensive transport and logistics services including freight, warehousing, and distribution.',
                phone: '+264 61 299 2000',
                email: 'info@namtrans.com.na',
                location: 'Windhoek, Namibia',
                website: 'https://www.namtrans.com.na',
                rating: 4.1,
                ratingCount: 28,
                createdAt: new Date(Date.now() - 3628800000).toISOString()
            }
        ];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderSpecials();
        this.renderSubscribers();
        this.renderSuppliers();
        this.updateAnalytics();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Form submission
        document.getElementById('special-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.createSpecial();
        });

        // Preview button
        document.getElementById('preview-btn').addEventListener('click', () => {
            this.previewSpecial();
        });

        // Notify all button
        document.getElementById('notify-all-btn').addEventListener('click', () => {
            this.notifyAllSubscribers();
        });

        // File upload
        document.getElementById('photo').addEventListener('change', (e) => {
            this.handlePhotoUpload(e);
        });

        // Modal close buttons
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                this.closeModals();
            });
        });

        // Share buttons
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleShare(e.target.closest('.share-btn'));
            });
        });

        // Filters
        document.getElementById('status-filter').addEventListener('change', () => {
            this.filterSpecials();
        });

        document.getElementById('search-specials').addEventListener('input', () => {
            this.filterSpecials();
        });

        // Subscriber actions
        document.getElementById('export-subscribers').addEventListener('click', () => {
            this.exportSubscribers();
        });

        document.getElementById('send-notification').addEventListener('click', () => {
            this.openNotificationModal();
        });

        document.getElementById('notification-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendNotification();
        });

        document.getElementById('cancel-notification').addEventListener('click', () => {
            this.closeModals();
        });

        // Supplier actions
        document.getElementById('add-supplier').addEventListener('click', () => {
            this.openSupplierModal();
        });

        document.getElementById('export-suppliers').addEventListener('click', () => {
            this.exportSuppliers();
        });

        document.getElementById('supplier-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addSupplier();
        });

        document.getElementById('cancel-supplier').addEventListener('click', () => {
            this.closeModals();
        });

        document.getElementById('rate-supplier-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.rateSupplier();
        });

        document.getElementById('cancel-rating').addEventListener('click', () => {
            this.closeModals();
        });

        // Supplier filters
        document.getElementById('supplier-category-filter').addEventListener('change', () => {
            this.filterSuppliers();
        });

        document.getElementById('supplier-rating-filter').addEventListener('change', () => {
            this.filterSuppliers();
        });

        document.getElementById('search-suppliers').addEventListener('input', () => {
            this.filterSuppliers();
        });

        // Category dropdown
        document.getElementById('categories-dropdown').addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleCategoryDropdown();
        });

        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.currentTarget.getAttribute('data-category');
                this.selectCategory(category);
            });
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModals();
            }
        });
    }

    switchTab(tabName) {
        // Update navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');

        // Load data for specific tabs
        if (tabName === 'analytics') {
            this.updateAnalytics();
        } else if (tabName === 'subscribers') {
            this.renderSubscribers();
        } else if (tabName === 'suppliers') {
            this.renderSuppliers();
        }
    }

    createSpecial() {
        this.showLoading();

        // Simulate loading
        setTimeout(() => {
            const formData = new FormData(document.getElementById('special-form'));
            const specialData = {
                id: Date.now().toString(),
                title: formData.get('title'),
                description: formData.get('description'),
                price: formData.get('price'),
                category: formData.get('category'),
                expiry: formData.get('expiry') ? new Date(formData.get('expiry')).toISOString() : null,
                createdAt: new Date().toISOString(),
                views: 0,
                shares: 0,
                status: 'active'
            };

            // Add photo if selected
            const photoPreview = document.querySelector('#photo-preview img');
            if (photoPreview) {
                specialData.photoUrl = photoPreview.src;
            }

            // Add to local array
            this.specials.unshift(specialData);

            // Reset form
            document.getElementById('special-form').reset();
            document.getElementById('photo-preview').innerHTML = '';

            this.showSuccess('Special created successfully! (Demo mode - not saved)');
            this.switchTab('manage');
            this.hideLoading();
        }, 1000);
    }

    handlePhotoUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('photo-preview').innerHTML = 
                    `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        }
    }

    previewSpecial() {
        const formData = new FormData(document.getElementById('special-form'));
        
        if (!formData.get('title') || !formData.get('description')) {
            this.showError('Please fill in the title and description to preview.');
            return;
        }

        const previewData = {
            title: formData.get('title'),
            description: formData.get('description'),
            price: formData.get('price'),
            category: formData.get('category'),
            photoUrl: document.querySelector('#photo-preview img')?.src
        };

        this.currentSpecial = previewData;
        this.showPreviewModal();
    }

    showPreviewModal() {
        const modal = document.getElementById('preview-modal');
        const content = document.getElementById('preview-content');

        content.innerHTML = `
            <h3>${this.currentSpecial.title}</h3>
            <p>${this.currentSpecial.description}</p>
            ${this.currentSpecial.price ? `<div class="price">${this.currentSpecial.price}</div>` : ''}
            ${this.currentSpecial.photoUrl ? `<img src="${this.currentSpecial.photoUrl}" style="max-width: 200px; border-radius: 10px; margin-top: 15px;">` : ''}
        `;

        modal.style.display = 'block';
    }

    handleShare(shareBtn) {
        if (!this.currentSpecial) return;

        const specialData = this.currentSpecial;
        const shareText = `${specialData.title}\n\n${specialData.description}${specialData.price ? `\n\nPrice: ${specialData.price}` : ''}`;

        if (shareBtn.classList.contains('whatsapp')) {
            window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`);
        } else if (shareBtn.classList.contains('facebook')) {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`);
        } else if (shareBtn.classList.contains('instagram')) {
            this.downloadImage();
        } else if (shareBtn.classList.contains('download')) {
            this.downloadImage();
        }
    }

    async downloadImage() {
        if (!this.currentSpecial) return;

        try {
            const previewContent = document.getElementById('preview-content');
            const canvas = await html2canvas(previewContent, {
                backgroundColor: null,
                scale: 2
            });

            const link = document.createElement('a');
            link.download = `${this.currentSpecial.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
            link.href = canvas.toDataURL();
            link.click();
        } catch (error) {
            console.error('Error generating image:', error);
            this.showError('Failed to generate image. Please try again.');
        }
    }

    renderSpecials() {
        const container = document.getElementById('specials-list');
        const statusFilter = document.getElementById('status-filter').value;
        const searchTerm = document.getElementById('search-specials').value.toLowerCase();

        let filteredSpecials = this.specials;

        // Apply status filter
        if (statusFilter !== 'all') {
            filteredSpecials = filteredSpecials.filter(special => {
                if (statusFilter === 'active') {
                    return special.status === 'active' && (!special.expiry || new Date(special.expiry) > new Date());
                } else if (statusFilter === 'expired') {
                    return special.status === 'expired' || (special.expiry && new Date(special.expiry) <= new Date());
                }
                return true;
            });
        }

        // Apply search filter
        if (searchTerm) {
            filteredSpecials = filteredSpecials.filter(special =>
                special.title.toLowerCase().includes(searchTerm) ||
                special.description.toLowerCase().includes(searchTerm)
            );
        }

        container.innerHTML = filteredSpecials.map(special => `
            <div class="special-card">
                <div class="special-header">
                    <div>
                        <div class="special-title">${special.title}</div>
                        <span class="special-category">${this.getCategoryName(special.category)}</span>
                    </div>
                    <span class="status-badge ${this.getStatusClass(special)}">${this.getStatusText(special)}</span>
                </div>
                <div class="special-description">${special.description}</div>
                ${special.price ? `<div style="margin-bottom: 15px;"><strong>Price:</strong> ${special.price}</div>` : ''}
                ${special.photoUrl ? `<img src="${special.photoUrl}" style="max-width: 150px; border-radius: 8px; margin-bottom: 15px;">` : ''}
                <div class="special-meta">
                    <span>Created: ${new Date(special.createdAt).toLocaleDateString()}</span>
                    <span>Views: ${special.views || 0} | Shares: ${special.shares || 0}</span>
                </div>
                <div class="special-actions">
                    <button class="btn btn-primary" onclick="demo.editSpecial('${special.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-secondary" onclick="demo.shareSpecial('${special.id}')">
                        <i class="fas fa-share"></i> Share
                    </button>
                    <button class="btn btn-secondary" onclick="demo.deleteSpecial('${special.id}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }

    getCategoryName(category) {
        const categories = {
            food: 'Food & Beverage',
            tourism: 'Tourism & Hospitality',
            retail: 'Retail & Shopping',
            service: 'Services',
            agriculture: 'Agriculture & Farming',
            mining: 'Mining & Resources',
            event: 'Events & Entertainment',
            other: 'Other'
        };
        return categories[category] || category;
    }

    getStatusClass(special) {
        if (special.status === 'expired' || (special.expiry && new Date(special.expiry) <= new Date())) {
            return 'status-expired';
        }
        return 'status-active';
    }

    getStatusText(special) {
        if (special.status === 'expired' || (special.expiry && new Date(special.expiry) <= new Date())) {
            return 'Expired';
        }
        return 'Active';
    }

    filterSpecials() {
        this.renderSpecials();
    }

    editSpecial(specialId) {
        const special = this.specials.find(s => s.id === specialId);
        if (!special) return;

        // Populate form with special data
        document.getElementById('title').value = special.title;
        document.getElementById('description').value = special.description;
        document.getElementById('price').value = special.price || '';
        document.getElementById('category').value = special.category;
        if (special.expiry) {
            document.getElementById('expiry').value = special.expiry.slice(0, 16);
        }

        if (special.photoUrl) {
            document.getElementById('photo-preview').innerHTML = 
                `<img src="${special.photoUrl}" alt="Preview">`;
        }

        this.currentSpecial = special;
        this.switchTab('create');
    }

    shareSpecial(specialId) {
        const special = this.specials.find(s => s.id === specialId);
        if (!special) return;

        this.currentSpecial = special;
        this.showPreviewModal();

        // Increment share count
        special.shares = (special.shares || 0) + 1;
        this.renderSpecials();
    }

    deleteSpecial(specialId) {
        if (!confirm('Are you sure you want to delete this special?')) return;

        this.specials = this.specials.filter(s => s.id !== specialId);
        this.renderSpecials();
        this.showSuccess('Special deleted successfully! (Demo mode)');
    }

    renderSubscribers() {
        const container = document.getElementById('subscribers-list');
        container.innerHTML = this.subscribers.map(subscriber => `
            <div class="subscriber-card">
                <div class="subscriber-info">
                    <div class="subscriber-avatar">
                        ${subscriber.email.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <div><strong>${subscriber.email}</strong></div>
                        <div style="font-size: 0.9rem; color: #666;">
                            Subscribed: ${new Date(subscriber.subscribedAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <button class="btn btn-secondary" onclick="demo.removeSubscriber('${subscriber.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    removeSubscriber(subscriberId) {
        if (!confirm('Are you sure you want to remove this subscriber?')) return;

        this.subscribers = this.subscribers.filter(s => s.id !== subscriberId);
        this.renderSubscribers();
        this.showSuccess('Subscriber removed successfully! (Demo mode)');
    }

    exportSubscribers() {
        const csvContent = "data:text/csv;charset=utf-8," 
            + "Email,Subscribed Date\n"
            + this.subscribers.map(s => `${s.email},${new Date(s.subscribedAt).toLocaleDateString()}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "subscribers.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    openNotificationModal() {
        document.getElementById('notification-modal').style.display = 'block';
    }

    sendNotification() {
        const title = document.getElementById('notification-title').value;
        const message = document.getElementById('notification-message').value;

        if (!title || !message) {
            this.showError('Please fill in both title and message.');
            return;
        }

        this.showLoading();

        // Simulate sending notification
        setTimeout(() => {
            this.showSuccess(`Notification sent to ${this.subscribers.length} subscribers! (Demo mode)`);
            this.closeModals();
            document.getElementById('notification-form').reset();
            this.hideLoading();
        }, 1500);
    }

    updateAnalytics() {
        // Calculate analytics from local data
        const totalViews = this.specials.reduce((sum, special) => sum + (special.views || 0), 0);
        const totalShares = this.specials.reduce((sum, special) => sum + (special.shares || 0), 0);
        const totalSubscribers = this.subscribers.length;
        const activeSpecials = this.specials.filter(special => 
            special.status === 'active' && (!special.expiry || new Date(special.expiry) > new Date())
        ).length;

        // Update UI
        document.getElementById('total-views').textContent = totalViews;
        document.getElementById('total-shares').textContent = totalShares;
        document.getElementById('total-subscribers').textContent = totalSubscribers;
        document.getElementById('active-specials').textContent = activeSpecials;

        // Update chart
        this.updateChart();
    }

    updateChart() {
        const ctx = document.getElementById('views-chart').getContext('2d');
        
        // Destroy existing chart if it exists
        if (window.viewsChart) {
            window.viewsChart.destroy();
        }

        // Prepare data for last 7 days
        const last7Days = [];
        const viewData = [];
        const shareData = [];

        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            last7Days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            
            // Generate demo data
            viewData.push(Math.floor(Math.random() * 50) + 10);
            shareData.push(Math.floor(Math.random() * 20) + 5);
        }

        window.viewsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: last7Days,
                datasets: [{
                    label: 'Views',
                    data: viewData,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Shares',
                    data: shareData,
                    borderColor: '#764ba2',
                    backgroundColor: 'rgba(118, 75, 162, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Views and Shares (Last 7 Days)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    closeModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    showLoading() {
        document.getElementById('loading').style.display = 'flex';
    }

    hideLoading() {
        document.getElementById('loading').style.display = 'none';
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 3000;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Supplier Management Functions
    renderSuppliers() {
        const container = document.getElementById('suppliers-list');
        const categoryFilter = document.getElementById('supplier-category-filter').value;
        const ratingFilter = document.getElementById('supplier-rating-filter').value;
        const searchTerm = document.getElementById('search-suppliers').value.toLowerCase();

        let filteredSuppliers = this.suppliers;

        // Apply category filter
        if (categoryFilter !== 'all') {
            filteredSuppliers = filteredSuppliers.filter(supplier => supplier.category === categoryFilter);
        }

        // Apply rating filter
        if (ratingFilter !== 'all') {
            const minRating = parseInt(ratingFilter);
            filteredSuppliers = filteredSuppliers.filter(supplier => supplier.rating >= minRating);
        }

        // Apply search filter
        if (searchTerm) {
            filteredSuppliers = filteredSuppliers.filter(supplier =>
                supplier.name.toLowerCase().includes(searchTerm) ||
                supplier.description.toLowerCase().includes(searchTerm) ||
                supplier.location.toLowerCase().includes(searchTerm)
            );
        }

        container.innerHTML = filteredSuppliers.map(supplier => `
            <div class="supplier-card">
                <div class="supplier-header">
                    <div>
                        <div class="supplier-name">${supplier.name}</div>
                        <span class="supplier-category">${this.getCategoryName(supplier.category)}</span>
                    </div>
                </div>
                <div class="supplier-description">${supplier.description}</div>
                <div class="supplier-contact">
                    ${supplier.phone ? `<div class="supplier-contact-item"><i class="fas fa-phone"></i> ${supplier.phone}</div>` : ''}
                    ${supplier.email ? `<div class="supplier-contact-item"><i class="fas fa-envelope"></i> ${supplier.email}</div>` : ''}
                    ${supplier.location ? `<div class="supplier-contact-item"><i class="fas fa-map-marker-alt"></i> ${supplier.location}</div>` : ''}
                    ${supplier.website ? `<div class="supplier-contact-item"><i class="fas fa-globe"></i> <a href="${supplier.website}" target="_blank">Website</a></div>` : ''}
                </div>
                <div class="supplier-rating">
                    <div class="rating-stars">
                        ${this.generateStars(supplier.rating)}
                    </div>
                    <span class="rating-count">${supplier.rating} (${supplier.ratingCount} reviews)</span>
                </div>
                <div class="supplier-actions-buttons">
                    <button class="btn btn-primary" onclick="demo.rateSupplierModal('${supplier.id}')">
                        <i class="fas fa-star"></i> Rate
                    </button>
                    <button class="btn btn-secondary" onclick="demo.viewSupplierDetails('${supplier.id}')">
                        <i class="fas fa-eye"></i> Details
                    </button>
                    <button class="btn btn-secondary" onclick="demo.removeSupplier('${supplier.id}')">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `).join('');
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star">★</span>';
        }
        if (hasHalfStar) {
            stars += '<span class="star">☆</span>';
        }
        for (let i = 0; i < emptyStars; i++) {
            stars += '<span class="star empty">★</span>';
        }
        return stars;
    }

    openSupplierModal() {
        document.getElementById('supplier-modal').style.display = 'block';
    }

    addSupplier() {
        const formData = new FormData(document.getElementById('supplier-form'));
        const supplierData = {
            id: Date.now().toString(),
            name: formData.get('supplier-name'),
            category: formData.get('supplier-category'),
            description: formData.get('supplier-description'),
            phone: formData.get('supplier-phone'),
            email: formData.get('supplier-email'),
            location: formData.get('supplier-location'),
            website: formData.get('supplier-website'),
            rating: 0,
            ratingCount: 0,
            createdAt: new Date().toISOString()
        };

        this.suppliers.push(supplierData);
        this.renderSuppliers();
        this.closeModals();
        document.getElementById('supplier-form').reset();
        this.showSuccess('Supplier added successfully! (Demo mode)');
    }

    exportSuppliers() {
        const csvContent = "data:text/csv;charset=utf-8," 
            + "Company Name,Category,Description,Phone,Email,Location,Website,Rating,Rating Count\n"
            + this.suppliers.map(s => `${s.name},${this.getCategoryName(s.category)},${s.description},${s.phone || ''},${s.email || ''},${s.location || ''},${s.website || ''},${s.rating},${s.ratingCount}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "suppliers.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    filterSuppliers() {
        this.renderSuppliers();
    }

    rateSupplierModal(supplierId) {
        this.currentSupplierId = supplierId;
        document.getElementById('rate-supplier-modal').style.display = 'block';
    }

    rateSupplier() {
        const rating = parseInt(document.querySelector('input[name="rating"]:checked').value);
        const comment = document.getElementById('rating-comment').value;

        const supplier = this.suppliers.find(s => s.id === this.currentSupplierId);
        if (supplier) {
            // Update rating (simple average)
            const newRatingCount = supplier.ratingCount + 1;
            const newRating = ((supplier.rating * supplier.ratingCount) + rating) / newRatingCount;
            
            supplier.rating = Math.round(newRating * 10) / 10; // Round to 1 decimal
            supplier.ratingCount = newRatingCount;
        }

        this.renderSuppliers();
        this.closeModals();
        document.getElementById('rate-supplier-form').reset();
        this.showSuccess(`Rating submitted! (Demo mode)`);
    }

    viewSupplierDetails(supplierId) {
        const supplier = this.suppliers.find(s => s.id === supplierId);
        if (supplier) {
            alert(`Supplier Details:\n\nName: ${supplier.name}\nCategory: ${this.getCategoryName(supplier.category)}\nDescription: ${supplier.description}\nPhone: ${supplier.phone || 'N/A'}\nEmail: ${supplier.email || 'N/A'}\nLocation: ${supplier.location || 'N/A'}\nWebsite: ${supplier.website || 'N/A'}\nRating: ${supplier.rating}/5 (${supplier.ratingCount} reviews)`);
        }
    }

    removeSupplier(supplierId) {
        if (!confirm('Are you sure you want to remove this supplier?')) return;

        this.suppliers = this.suppliers.filter(s => s.id !== supplierId);
        this.renderSuppliers();
        this.showSuccess('Supplier removed successfully! (Demo mode)');
    }

    // Notify All Subscribers
    notifyAllSubscribers() {
        const formData = new FormData(document.getElementById('special-form'));
        const title = formData.get('title');
        const description = formData.get('description');
        const price = formData.get('price');
        const category = formData.get('category');

        if (!title || !description) {
            this.showError('Please fill in the title and description before notifying subscribers.');
            return;
        }

        const message = `🎉 New Special Alert!\n\n${title}\n\n${description}\n\nPrice: ${price || 'Contact for pricing'}\nCategory: ${this.getCategoryName(category)}\n\nCheck it out now!`;

        if (this.subscribers.length === 0) {
            this.showError('No subscribers to notify. Add some subscribers first!');
            return;
        }

        // Simulate notification sending
        this.showLoading();
        setTimeout(() => {
            this.hideLoading();
            this.showSuccess(`Notification sent to ${this.subscribers.length} subscribers! (Demo mode)`);
            
            // Update analytics
            this.updateAnalytics();
        }, 2000);
    }

    // Category Dropdown Functions
    toggleCategoryDropdown() {
        const dropdown = document.getElementById('categories-menu');
        dropdown.classList.toggle('show');
    }

    selectCategory(category) {
        const dropdown = document.getElementById('categories-menu');
        dropdown.classList.remove('show');
        
        if (category === 'all') {
            this.renderSpecials();
            this.showSuccess('Showing all categories');
        } else {
            const filteredSpecials = this.specials.filter(special => special.category === category);
            this.renderSpecials(filteredSpecials);
            this.showSuccess(`Showing ${this.getCategoryName(category)} specials`);
        }
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the demo when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.demo = new BusinessSpecialsDemo();
}); 