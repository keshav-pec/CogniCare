import express from 'express';

const router = express.Router();

// Get specialists by location
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lon, radius = 10 } = req.query;
    
    // Mock specialist data
    const specialists = [
      {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'Neurologist',
        rating: 4.8,
        reviews: 156,
        distance: 2.3,
        address: '123 Medical Plaza, Suite 400',
        phone: '(555) 123-4567',
        accepting: true,
        experience: 15
      },
      {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Geriatrician',
        rating: 4.9,
        reviews: 203,
        distance: 4.1,
        address: '456 Health Center Dr',
        phone: '(555) 234-5678',
        accepting: true,
        experience: 20
      },
      {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        specialty: 'Neuropsychologist',
        rating: 4.7,
        reviews: 98,
        distance: 5.8,
        address: '789 Wellness Ave',
        phone: '(555) 345-6789',
        accepting: false,
        experience: 12
      }
    ];
    
    res.json({ success: true, data: specialists });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get specialist details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const specialist = {
      id,
      name: 'Dr. Sarah Johnson',
      specialty: 'Neurologist',
      rating: 4.8,
      reviews: 156,
      address: '123 Medical Plaza, Suite 400',
      phone: '(555) 123-4567',
      email: 'dr.johnson@example.com',
      accepting: true,
      experience: 15,
      education: ['MD - Harvard Medical School', 'Residency - Johns Hopkins'],
      languages: ['English', 'Spanish'],
      insuranceAccepted: ['Blue Cross', 'Aetna', 'UnitedHealthcare'],
      availableSlots: ['2025-10-05T10:00', '2025-10-05T14:00', '2025-10-06T09:00']
    };
    
    res.json({ success: true, data: specialist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Submit review
router.post('/review', async (req, res) => {
  try {
    const { specialistId, userId, rating, comment } = req.body;
    
    const review = {
      id: Date.now(),
      specialistId,
      userId,
      rating,
      comment,
      timestamp: new Date().toISOString()
    };
    
    res.json({
      success: true,
      message: 'Review submitted successfully',
      data: review
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get reviews for specialist
router.get('/:id/reviews', async (req, res) => {
  try {
    const { id } = req.params;
    
    const reviews = [
      {
        id: 1,
        userName: 'John D.',
        rating: 5,
        comment: 'Very thorough and compassionate. Took time to explain everything.',
        date: '2025-09-15'
      },
      {
        id: 2,
        userName: 'Mary S.',
        rating: 4,
        comment: 'Knowledgeable doctor, though wait times can be long.',
        date: '2025-09-10'
      }
    ];
    
    res.json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
